import path from "path";
import webpack from "webpack";
import { buildWebpack } from "./config/build/buildWebpack";
import { BuildMode, BuildPaths, BuildPlatform } from "./config/build/types/types";
// type Mode = 'production' | 'development'

interface EnvVariables {
  mode?: BuildMode
  port: number
  analyzer?: boolean,
  platform?: BuildPlatform
}

export default (env: EnvVariables) => {
  // const isDev = env.mode === 'development'
  const paths: BuildPaths = {
    output: path.resolve(__dirname, 'build'),
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
    public: path.resolve(__dirname, 'public'),
  }

  const config: webpack.Configuration = buildWebpack({
    port: env.port ?? 5000,
    mode: env.mode ?? "development",
    paths,
    analyzer: env.analyzer,
    platform: env.platform ?? 'desktop'
  })
  // {
  //   mode: env.mode ?? "development", // в каком режиме сборка 

  //   entry: path.resolve(__dirname, "src", "index.tsx"),
  //   //entry:{ если точек входа много
  //   // helloWorld1: path.resolve(__dirname, "src", "index.js"),
  //   //    helloWorld2: path.resolve(__dirname, "src", "index2.js"),
  //   //   } __dirname - текущая директория

  //   output: {
  //     path: path.resolve(__dirname, "build"),
  //     filename: "[name].[contenthash].js",
  //     clean: true, //очищение папки build перед тем как положить новый бандл
  //   },

  //   plugins: [
  //     new HtmlWebpackPlugin({
  //       template: path.resolve(__dirname, "public", "index.html"),
  //     }), // сохраняется архитектура нашего файла
  //     //   new HtmlWebpackPlugin(), если не указывать темплейт,
  //     //  то создается дефолтный html файл

  //     isDev && new webpack.ProgressPlugin(), //указфваются проценты сборки

  //     !isDev && new MiniCssExtractPlugin({
  //       filename: 'css/[name].[contenthash:8].css',
  //       chunkFilename: 'css/[name].[contenthash:8].css'
  //     })
  //   ],

  //   module: {
  //     rules: [
  //       //в этом массиве указываются лоудеры

  //       //работа с css
  //       // {
  //       //   test: /\.css?$/i,
  //       //   use: ["style-loader", "css-loader"]
  //       // },

  //       //работа с scss
  //       {
  //         test: /\.s[ac]ss$/i,
  //         use: [
  //           // Creates `style` nodes from JS strings
  //           //"style-loader",
  //           MiniCssExtractPlugin.loader,
  //           // Translates CSS into CommonJS
  //           "css-loader",
  //           // Compiles Sass to CSS
  //           "sass-loader",
  //         ],
  //       },
  //       {
  //         //если бы не настроила работу с ts,
  //         //то надо было бы доп. описывать лоадер для jsx -> babel-loader
  //         test: /\.tsx?$/, //укаазывается расширение файлов, которые надо обработать
  //         use: "ts-loader", //название лоудера
  //         exclude: /node_modules/, //указывается то, что не обрабатывается
  //       },
  //     ],
  //   },

  //   resolve: {
  //     //в импортах можно не указывать расширение файлов
  //     extensions: [".tsx", ".ts", ".js"],
  //   },

  //   devtool: isDev ? 'inline-source-map' : false,
  //   devServer: isDev ? {
  //     port: env.port ?? 3000,
  //     open: true
  //   } : undefined,

  // };
  return config
};
