import { Configuration } from "webpack";
import { BuildOptions } from "./types/types";

export function buildResolvers(options: BuildOptions): Configuration['resolve'] {
  return {
    //в импортах можно не указывать расширение файлов
    extensions: [".tsx", ".ts", ".js"],
    
    alias: {
      '@': options.paths.src
  }
  }
}