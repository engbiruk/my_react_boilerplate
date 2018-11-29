const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = { 
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    // publicPath: 'public',
    filename: 'bundle.js'
  },
  plugins: [
    new CleanWebpackPlugin(['build']),
    new HtmlWebpackPlugin({
        template: path.join(__dirname, 'public/index.html')
    })
  ],  
//   mode: 'development',
  mode: 'production',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './build',
    port: 3003
  },  
  module: {
    rules: [
        {
          test: /\.js$/, 
          exclude: /node_modules/, 
          use: 'babel-loader'
        },
        {
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]
        },
        {
            test: /\.(png|svg|jpg|gif)$/,
            use: [ 'file-loader' ]
        },
        {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: [ 'file-loader' ]
        },
        {
            test: /\.(csv|tsv)$/,
            use: [ 'csv-loader' ]
        },
        {
            test: /\.xml$/,
            use: [ 'xml-loader' ]
        }
    ]   
  }
}