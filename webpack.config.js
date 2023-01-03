const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    plugins: [
        new HTMLWebpackPlugin({
                    template:'./public/index.html'
                })
    ],

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: ['ts-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js']
    },
    devServer: {
        host: 'localhost',
        port: 8080,
        historyApiFallback: true,
        static: {
          directory: path.join(__dirname, 'build'),
          publicPath: '/'
        },
        proxy: {
            '/api': 'http://localhost:4000'
        }
      }
}