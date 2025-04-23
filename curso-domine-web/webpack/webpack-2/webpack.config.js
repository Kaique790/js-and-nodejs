import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import TerserPlugin from 'terser-webpack-plugin'
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin'
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';

const modoDev = process.env.NODE_ENV !== 'production'


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
    mode: modoDev ? 'development' : 'production',
    entry: './src/principal.js',
    output: {
        filename: 'principal.js',
        path:  path.resolve(__dirname, 'public')
    },
    devServer: {
        static: path.resolve(__dirname, './public'),
        port: 9000
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "style.css"
        }),
        new Html
    ],
    optimization: {
        minimizer: [
            new TerserPlugin({
                parallel: true
            }),
            new CssMinimizerPlugin({})
        ]
    },
    module: {
        rules: [{
            test: /\.s?[ac]ss$/,
            use: [
                MiniCssExtractPlugin.loader,
                // 'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            use: ['file-loader']
        }]
    }
}