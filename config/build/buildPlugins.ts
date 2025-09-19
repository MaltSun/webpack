import { Configuration, DefinePlugin } from "webpack";
import { BuildOptions } from "./types/types";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin"
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin"
import ReactRefreshPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import path from "path";


const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

export function buildPlugins({ mode, platform, paths, analyzer }: BuildOptions): Configuration['plugins'] {
    const isDev = mode === 'development'
    const isProd = mode === 'production'

    const plugins: Configuration['plugins'] = [
        new HtmlWebpackPlugin({ template: paths.html,
            favicon: path.resolve(paths.public, 'favicon.ico')
         }),
        new DefinePlugin({
            __PLATFORM__: JSON.stringify(platform)
        })
    
    ]

    if (isDev) {
        // plugins.push(new webpack.ProgressPlugin())

        //проверка типов остается,
        // но она вынесена в отдельный процесс
        plugins.push(new ForkTsCheckerWebpackPlugin())
        
        //чтобы норм обновлялось без перезагрузки
        plugins.push(new ReactRefreshPlugin())
    }

    if (isProd) {
        plugins.push(new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        }))
    }

    if (analyzer) {
        plugins.push(new BundleAnalyzerPlugin())
    }

    return plugins
}