var path = require('path');
var webpack = require('webpack');
var VueLoaderPlugin = require('vue-loader/lib/plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
    entry: {
        app: './app/js/main.js',
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "vue-style-loader"
                    },
                    // {
                    //     loader: MiniCssExtractPlugin.loader,
                    //     options: {
                    //         hmr: process.env.NODE_ENV === 'development',
                    //     },
                    // },
                    {
                        loader: "css-loader",
                        // options: {
                        //     // 开启 CSS Modules
                        //     modules: true,
                        //     // 自定义生成的类名
                        //     localIdentName: '[local]_[hash:base64:8]'
                        // }
                    },
                    // {
                    //     loader: 'px2rem-loader',
                    //     options: {
                    //         remUni: 75,
                    //         remPrecision: 8
                    //     }
                    // }
                ]
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" // 将 JS 字符串生成为 style 节点
                },
                // {
                //     loader: MiniCssExtractPlugin.loader,
                //     options: {
                //         hmr: process.env.NODE_ENV === 'development',
                //     },
                // },
                {
                    loader: "css-loader", // 将 CSS 转化成 CommonJS 模块
                    // options: {
                    //     // 开启 CSS Modules
                    //     modules: true,
                    //     // 自定义生成的类名
                    //     localIdentName: '[local]_[hash:base64:8]'
                    // }
                }, {
                    loader: "sass-loader" // 将 Sass 编译成 CSS
                },
                // {
                //     loader: 'px2rem-loader',
                //     options: {
                //         remUni: 75,
                //         remPrecision: 8
                //     }
                // }
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: './app/views/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css'
        })
    ],
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js' // 用 webpack 1 时需用 'vue/dist/vue.common.js'
        }
    },
    output: {
        filename: '[name].min.js',
        path: path.resolve(__dirname, 'dist')
    }
}


