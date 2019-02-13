const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    context: __dirname,
    entry: {
        bundle: path.join(__dirname, './', 'demo')
    },
    devServer: {
        inline: true,
        host: '0.0.0.0',
        port: 1111
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'firebase-easy-pagination.js',
        publicPath: 'dist'
    },
    plugins: [
    ],
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: {
                  loader: 'ts-loader',
                  options: {
                      transpileOnly: true
                  }
                }
            }
        ]
    }
}