const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin =  require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports =  {
    mode: 'production',
    entry: [ 'webpack-hot-middleware/client?reload=true', './src/index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: 'main.css' }),
        new HtmlWebpackPlugin({ filename: 'index.html', template: './src/index.html'}),
        new webpack.HotModuleReplacementPlugin()
    ],
    devtool: 'inline-source-maps',
    devServer: {
        contentBase: 'dist',
        open: 'Google Chrome',
        port: '8000',
        inline: true,
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                resolve: { extensions: [ '.js', '.jsx' ] },
            },
            {
                test: /\.s?css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        query: {
                            modules: true,
                        }
                    },
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: { name: 'images/[hash:8].[ext]' }
                    }
                ]
            }
        ],
    }


}