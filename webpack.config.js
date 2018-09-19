var path = require('path')
var HTMLPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        main: './src/main.js'
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'dist')
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 8881,
        historyApiFallback: true,
    },
    mode: 'development',
    resolve: {
        extensions: ['.jsx', '.js']
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['react', 'env', 'stage-0'],
                    plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']

                }
            }
        }]
    },
    devtool: 'inline-source-map',
    plugins: [
        new HTMLPlugin({
            template: './src/index.html'
        })
    ]
}