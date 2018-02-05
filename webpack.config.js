const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

module.exports = {
    context: path.resolve(__dirname, './demo'),
    entry: {
        "bundle.min": "./app.js"
    },
    output: {
        path: path.resolve(__dirname, './demo'),
        filename: "[name].js"
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: ['babel-preset-es2015', 'babel-preset-react']
                }
            },

            {
                test: /\.(scss)$/,

                use: [
                    {
                        loader: "style-loader"
                    },

                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            minimize: {discardComments: {removeAll: true}}
                        }
                    },

                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                autoprefixer({})
                            ],
                            sourceMap: true
                        }
                    },

                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]

            }
        ]
    },
    plugins: [

        new webpack.optimize.UglifyJsPlugin({
            include: /\.min\.js$/,
            minimize: true
        })

    ]
};