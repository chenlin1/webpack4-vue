const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
module.exports = {
    optimization: {
        minimizer: [new UglifyJsPlugin()],
      },
    entry: {
        app: ['./app/js/viewport.js','./app/js/main.js'],
    },
    // devServer: {
    //     contentBase: path.join(__dirname, 'dist'),
    //     compress: true,
    //     port: 9000
    // },
    mode:'development',
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
                test: '/\.js$/',
                exclude: '/(node_modules)/', // 排除文件
                loader: 'babel-loader'
              },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                          publicPath: '../'
                        }
                      },
                    {
                        loader: "css-loader",
                        options: {
                            // 开启 CSS Modules
                            modules: true,
                            // 自定义生成的类名
                            localIdentName: '[local]_[hash:base64:8]'
                        }
                    },
                    {
                        loader: 'px2rem-loader',
                        options: {
                            remUni: 75,
                            remPrecision: 8
                        }
                    },
                    {
                        loader: "postcss-loader"
                    },
                    {
                        loader: "sass-loader"
                    }
                ]
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                          publicPath: '../'
                        } 
                    },
                    {
                        loader: "css-loader",
                        options: {
                            // 开启 CSS Modules
                            modules: true,
                            // 自定义生成的类名
                            localIdentName: '[local]_[hash:base64:8]'
                        }
                    },
                    {
                        loader: 'px2rem-loader',
                        options: {
                            remUni: 75,
                            remPrecision: 8
                        }
                    },
                    {
                        loader: "postcss-loader"
                    },
                    {
                        loader: "sass-loader"
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      limit: 5000,
                      // 分离图片至imgs文件夹
                      name: "imgs/[name].[ext]",
                    }
                  },
                ]
              },
              // 图片压缩
                {
                    loader: 'image-webpack-loader',
                    options: {
                    //   bypassOnDebug: true,
                    mozjpeg: {
                        progressive: true,
                        quality: 65
                    },
                    optipng: {
                        enabled: false,
                    },
                    pngquant: {
                        quality: '65-90',
                        speed: 4
                    },
                    gifsicle: {
                        interlaced: false,
                    }
                    },
                }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: './app/views/index.html'
        }),
        // new UglifyJsPlugin({
        //     uglifyOptions: {
        //       compress: {
        //         warnings: false, // 去除警告
        //         drop_debugger: true, // 去除debugger
        //         drop_console: true // 去除console.log
        //       },
        //     },
        //     cache: true, // 开启缓存
        //     parallel: true, // 平行压缩
        //     sourceMap: true // set to true if you want JS source maps
        //   }),
        new MiniCssExtractPlugin({
            filename: 'style.css'
        }),
        new OptimizeCSSAssetsPlugin(),

    ],
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js' // 用 webpack 1 时需用 'vue/dist/vue.common.js'
        }
    },
    output: {
        filename: '[name].min.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'source-map',
}


