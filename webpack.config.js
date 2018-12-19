// entry  -> output
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env) => {
  const isProduction = env === 'production';
  const CSSExtract = new ExtractTextPlugin('styles.css');

  return {
    //defining all are configuration details on our webpack build
    // ./ means relative path which is files that are located inside of it as well
    entry: './src/app.js',
    output: {
      //this has to be the absolute path which means from the very beginning where this file starts
      path: path.resolve(__dirname, 'public', 'dist'),
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
        use: CSSExtract.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        })
      }]
    },
    plugins: [
      CSSExtract
    ],
    //we can specify the source map we want
    //you can find the many option in webpack.com and devtool
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase: path.resolve(__dirname, 'public'),
      historyApiFallback: true,
      publicPath: '/dist/'
    }
  };
}