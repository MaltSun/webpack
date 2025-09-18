import { ModuleOptions } from "webpack";
import { BuildOptions } from "./types/types";
import MiniCssExtractPlugin from "mini-css-extract-plugin"
import { before } from "node:test";
import ReactRefreshTypeScript from 'react-refresh-typescript'
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

    const tsLoader = {
        //если бы не настроила работу с ts,
        //то надо было бы доп. описывать лоадер для jsx -> babel-loader
        test: /\.tsx?$/, //укаазывается расширение файлов, которые надо обработать
        use: [{
            loader: 'ts-loader',
            //чтобы просто сибирал ts, но не типизировал статически
            options: {
                transpileOnly: true,
                getCustomTransformers:()=>({
                    before: [isDev && ReactRefreshTypeScript()].filter(Boolean)
                })
            }
        }], 
        exclude: /node_modules/, //указывается то, что не обрабатывается
    }

    const assetsLoader = {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
    }

    const svgLoader = {
        test: /\.svg$/i,
        use: [{ loader: '@svgr/webpack', options: { icon: true } }],
    }

    const scssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            //"style-loader",
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,

            // Translates CSS into CommonJS
            cssLoaderWithModules,

            // Compiles Sass to CSS
            "sass-loader",
        ],
    }

    return [
        //работа с scss
        svgLoader,
        assetsLoader,
        scssLoader,
        tsLoader

    ]
}