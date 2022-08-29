const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {

  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.join(__dirname, '/dist')
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.join(__dirname, '/public/index.html'),
      filename: 'index.html'
    })
  ],
  module: {
    rules: [{
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
      test: /\.(sass|scss)$/i,
      use: ['style-loader', 'css-loader', 'sass-loader']
    },
    {
      test: /\.(png|jpg|gif|svg)$/i,
      use: [{ 
        loader: 'url-loader',
        options: {
          name: '[hash]-[name].[ext]'
        }
      }]
    }]

  }
}
