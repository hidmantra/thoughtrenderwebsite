//import * as path from 'path';
const path = require('path');
import * as webpack from 'webpack';
//import * as MiniCssExtractPlugin from 'mini-css-extract-plugin';
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config: webpack.Configuration = {
    mode: 'production',
    entry: './src/index.ts',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
    },
    module: {
        rules: [
        {
            test: /\.css$/,      // Match any files that end with ".css"
            use: [
                //'style-loader', // this was in prior example
                MiniCssExtractPlugin.loader,
                'css-loader'] // Pipe these files through style-loader upon import
        },
        /*
        {
            test: /\.scss$/,
            use:[{
                    loader: "style-loader" // creates style nodes from JS strings
                },{
                    loader: "css-loader", // translates CSS into CommonJS
                },{
                    loader: "sass-loader", // compiles Sass to CSS
                    options:{
                        includePaths: ["./src/styles/style.scss"]
                    }
                }]
                   
         },*/
         {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
          },
        {
            
            test: /\.(sass|scss)$/,
            use: [
                MiniCssExtractPlugin.loader,
                {
                    loader: "css-loader",
                    options: {
                    includePaths: ["./src/styles/style.scss"],
                    sourceMap: true,
                    importLoader: 2
                    }
                },
                "sass-loader"
            ]
             
        }],
       
           

        
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
      },
      plugins: [
        new MiniCssExtractPlugin({
          // Options similar to the same options in webpackOptions.output
          // both options are optional
          filename: "[name].css",
          chunkFilename: "[id].css"
        })
      ],
  };
  
  export default config;