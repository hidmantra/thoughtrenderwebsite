const merge = require('webpack-merge');
const webpack = require('webpack/index.js');
const common = require('./webpack.common.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');
let FaviconsWebpackPlugin = require('favicons-webpack-plugin');


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
      persistentCache: false,
      hash: false,
      inject: true,
    }),
    new CleanWebpackPlugin(['dist']), 
    
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
