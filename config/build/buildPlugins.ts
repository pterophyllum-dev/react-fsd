import webpack from "webpack";
import HTMLWebpackPlugin from "html-webpack-plugin";

import { BuildOptions } from "./types/config";

export const buildPlugins = ({ paths }: BuildOptions): webpack.WebpackPluginInstance[] => {

    return [
        new HTMLWebpackPlugin({
            template: paths.html
        }),
        new webpack.ProgressPlugin(),
    ]
}