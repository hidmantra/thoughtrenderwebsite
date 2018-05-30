
const path = require('path');
import * as webpack from 'webpack';
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config: webpack.Configuration = 
{
    mode: 'production',
    entry: 
    [
        './src/index.ts',
        './src/styles/style.scss'
    ],
    output: 
    {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
    },
    module: 
    {
        rules: 
        [
            {
                test: /\.css$/, 
                use: 
                [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ] 
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: 
                        {
                            includePaths: ["./src/styles/style.scss"],
                            sourceMap: true,
                            importLoader: 2
                        }
                    },
                    "sass-loader"
                ]
                
            }
        ],  
    },
    resolve: 
    {
        extensions: [ '.tsx', '.ts', '.js' ]
    },
      plugins: 
      [
            new MiniCssExtractPlugin (
            {
                filename: "[name].css",
                chunkFilename: "[id].css"
            })
      ],
  };
  
  export default config;