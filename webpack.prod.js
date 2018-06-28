const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
let FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  plugins: 
  [
    
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    
    new FaviconsWebpackPlugin({
      logo: './src/THR-logo-bw.png',
      persistentCache: true,
      inject: true,
    })
    
  ],
  module: 
    {
        rules: 
        [
            {
                test: /\.css$/, 
                use: 
                ['css-hot-loader'].concat(ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                  }))
              }
          ]
      }
});
