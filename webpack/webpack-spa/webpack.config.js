import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import * as glob from 'glob';

import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const generateHtmlPlugins = (templateDir) => {
    const templateFiles = glob.sync(`${templateDir}/**/*.html`);
    return templateFiles.map(file => {
        const relativePath = file.replace(`${templateDir}/`, '');

        const fileName = relativePath.split('/').pop();
        return new HtmlWebpackPlugin({
            filename: `paginas/${fileName}`,
            template: file
        });
    });
}

const htmlPlugins = generateHtmlPlugins('./src/paginas');

export default {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: resolve(__dirname, 'public')
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.css',
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        }),
        ...htmlPlugins
    ],
    module: {
        rules: [{
            test: /\.s?[ac]ss$/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                'sass-loader'
            ]
        }, {
            test: /\.html$/,
            use: ['html-loader']
        }, {
            test: /\.(png|jpg|svg|gif)$/,
            type: 'asset/resource'
        }]
    }
}