/**
 * Created by isuhar on 13.04.17.
 */
var path = require('path');
var webpack = require('webpack');

var DEBUG = process.env.NODE_ENV !== 'production' ? true : false;

var config  = {
    entry: './src/app.js',
    output: {
        path: __dirname + '/public/js/',
        publicPath: '/js',
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: ['babel-loader'],
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react'],
                    plugins: ['transform-decorators-legacy', 'transform-class-properties']
                }
            }
        ]
    },
    devServer:{
        contentBase: 'web',
        devtool: 'eval',
        port: 8080,
        hot: true,
        inline: true
    },
    devtool: 'eval'
};

module.exports = config;