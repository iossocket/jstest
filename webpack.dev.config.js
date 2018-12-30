const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname,
        filename: './release/bundle.js'
    },

    module: {
        rules: [{
            test: /\.js?$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader'
        }]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ],

    devServer: {
        contentBase: path.join(__dirname, './release'), // 根目录
        open: true, // 自动打开浏览器
        port: 9000,
        proxy: { // 当要访问http://localhost:8880/api下的内容时，将被代理到8880端口下开启的服务
            '/api/*': {
                target: 'http://localhost:8880'
            }
        }
    }
}