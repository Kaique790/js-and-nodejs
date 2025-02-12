import path from 'path'
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin'

import MiniCssExtractPlugin from 'mini-css-extract-plugin';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


export default {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist')
    },
    mode: 'development',
    devServer: {
        static: path.resolve(__dirname, './dist'),
        hot: true,
        port: '9000'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'index.css'
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html'
        })
    ]
}