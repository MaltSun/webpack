import { ModuleOptions } from "webpack";
import { BuildOptions } from "./types/types";
import MiniCssExtractPlugin from "mini-css-extract-plugin"

export function buildLoaders(options: BuildOptions): ModuleOptions['rules'] {
    const isDev = options.mode === 'development'

    const cssLoaderWithModules = {

        loader: "css-loader",
        options: {
            modules: {
                localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]'
            }
        }

    }

    return [
        //работа с scss
        {
            test: /\.s[ac]ss$/i,
            use: [
                //"style-loader",
                isDev ? 'style-loader' : MiniCssExtractPlugin.loader,

                // Translates CSS into CommonJS
                cssLoaderWithModules,

                // Compiles Sass to CSS
                "sass-loader",
            ],
        },
        {
            //если бы не настроила работу с ts,
            //то надо было бы доп. описывать лоадер для jsx -> babel-loader
            test: /\.tsx?$/, //укаазывается расширение файлов, которые надо обработать
            use: "ts-loader", //название лоудера
            exclude: /node_modules/, //указывается то, что не обрабатывается
        },
    ]
}