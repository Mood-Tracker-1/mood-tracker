const path = require('path');
//we require html plugin so we can add html to app (mpn install it first tho)
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    //entry is where webpack starts to build dependency graph
    entry: {
      index: path.resolve(__dirname, './client/index.js'),
    },
    //output is where Webpack saves our bundle
    output: {
        path: path.resolve(__dirname, './build'),
        filename: '[name].bundle.js', //[name] grabs from the entry obj
    },
    plugins : [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "./client/index.html")
        })
    ],
    mode: process.env.NODE_ENV,
    module: {
      rules: [
      {
        test: /\.jsx?/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
        use: ["file-loader"]
      }
    ],
    },
    devServer: {
      host: 'localhost',
      port: '8080',
      static: {
        directory: path.resolve(__dirname, 'build'),
        //publicPath: 'http://localhost:3000',
        publicPath: '/',
      },
    }
}