// entry  -> output
const path = require('path');

module.exports = {
  //defining all are configuration details on our webpack build
  // ./ means relative path which is files that are located inside of it as well
  entry: './src/app.js',
  output: {
    //this has to be the absolute path which means from the very beginning where this file starts
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  mode: 'none',
  module: {
    rules: [{
      loader: 'babel-loader',
      //run babel every time we see javascript files
      test: /\.js$/,
      exclude: /node_modules/
    },{
      //run any that ends in .scss and also css witht he include question mark
      test:/\.s?css$/,
      //provides us with array of loaders
      use: [
        //inject style it to the dom and appearing on our browswer
        'style-loader',
        //reads the file
        'css-loader',
        //gonna use node sass to convert file to css
        'sass-loader'
      ]
    }]
  },
  //we can specify the source map we want
  //you can find the many option in webpack.com and devtool
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    historyApiFallback: true
  }
};