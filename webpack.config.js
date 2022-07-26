const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {

  //entry: This is the file that webpack finds to start the bundle.
  entry: './src/index.js',
  //output: This is the file that becomes the bundle.
  //path: Creates a new dir for the bundle.
  //filename: Is the new bundle file.
  output: {
    filename: 'main.js',
    path: path.join(__dirname, '/dist')
  },
  //plugins: You can use tasks like bundle optimization, asset management & injection of environment variables.
    //In order to use a plugin, you would need to use a require() & add it
    //to the plugins array.
  plugins: [
    //This plugin generates a new HTML file & automatically injects
    //all your bundles into this file.
      //template: This finds the base HTML file.
      //filename: This creates the new HTML file.
    new HtmlWebPackPlugin({
      template: path.join(__dirname, '/public/index.html'),
      filename: 'index.html'
    })
  ],
  //module: This allows the use of modular tools in the form of loaders.
  module: {
    //rules: This creates modules based on the specification given.
      //These specifications are broken down into 3 parts:
        //Conditions
          //test: Finds the file to transform.
          //exclude: This 'excludes' any files or dir to be transformed.
        //Results
          //use: 'Uses' whatever loader is passed to it.
            //loader: Is the specified loader.
        //Nested Rules
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        //options: This uses certain functionality based on the loader.
        options: {
          //presets: These are specified functionality based on babel-loader
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
