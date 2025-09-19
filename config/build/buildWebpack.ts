import webpack from 'webpack'
import { buildDevServer } from './buildDevServer';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './builsResolvers';
import { BuildOptions } from './types/types';


export function buildWebpack(options : BuildOptions): webpack.Configuration {
  const {mode, paths} = options
  const isDev = options.mode === 'development'
  
  return {
    mode: mode ?? "development", // в каком режиме сборка продакшн/разработка

    entry: paths.entry,
    
    output: {
      path: paths.output,
      filename: "[name].[contenthash].js",
      clean: true, //очищение папки build перед тем как положить новый бандл
    },

    plugins: buildPlugins(options),

    module: {
      rules: buildLoaders(options),
    },

    resolve: buildResolvers(options),

    //
    devtool: isDev ? 'inline-source-map' : 'source-map',
    devServer: isDev ? buildDevServer(options) : undefined,

  }
}