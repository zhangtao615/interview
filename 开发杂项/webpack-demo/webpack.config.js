const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'src', 'index.js'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  }, 
  plugins: [
    new HtmlWebpackPlugin({
      path: path.join(__dirname, 'src', 'index.html'),
      filename: 'index.html',
    })
  ], 
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env'
            ]
          }
        },
        include:  path.join(__dirname, 'src'),
        exclude: /node_modules/
      },
    ]
  },
  devServer: {
    port: 3000,
    compress: true,
    static: {
      directory: path.join(__dirname, 'dist')
    },
    open: true,
  }
}