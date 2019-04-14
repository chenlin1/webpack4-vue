const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

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
        rules:[
            {
                test:/\.html$/,
                loader:'html-loader'
            },
            {
                test:/\.vue$/,
                loader:'vue-loader'
            },
            {   test: /\.css$/,
                use: [
                    "vue-style-loader", 
                    "css-loader"
                ]  
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" // 将 JS 字符串生成为 style 节点
                }, {
                    loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
                }, {
                    loader: "sass-loader" // 将 Sass 编译成 CSS
                }]
            }
        ]
    },
    plugins:[
        new CleanWebpackPlugin(),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: './app/views/index.html'
        })
    ],
    resolve: {
        alias: {
          'vue$': 'vue/dist/vue.esm.js' // 用 webpack 1 时需用 'vue/dist/vue.common.js'
        }
    },
    output:{
         filename: '[name].min.js',
         path: path.resolve(__dirname, 'dist')
    }
}


