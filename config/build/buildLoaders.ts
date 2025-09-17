import { ModuleOptions } from "webpack";
import { BuildOptions } from "./types/types";
import MiniCssExtractPlugin from "mini-css-extract-plugin"

export function buildLoaders(options: BuildOptions): ModuleOptions['rules'] {
    const isDev = options.mode === 'development'

    return [
        //работа с scss
        {
            test: /\.s[ac]ss$/i,
            use: [
                // Creates `style` nodes from JS strings
                //"style-loader",
               isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                // Translates CSS into CommonJS
                "css-loader",
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