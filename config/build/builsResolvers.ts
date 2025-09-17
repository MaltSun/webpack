import { Configuration } from "webpack";

export function buildResolvers(): Configuration['resolve']{
return {
      //в импортах можно не указывать расширение файлов
      extensions: [".tsx", ".ts", ".js"],
    }
}