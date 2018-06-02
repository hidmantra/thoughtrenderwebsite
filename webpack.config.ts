
const path = require('path');
import * as webpack from 'webpack';
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== 'production';

console.log("mode:>>> ", devMode);

const config: webpack.Configuration = 
{
    mode: 'production',
    entry: 
    [
        './src/index.ts',
        './src/styles/style.scss'
    ],
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000
      },
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
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    { loader: 'css-loader', options: { importLoader : 1 } }
                    ,'postcss-loader'
                ] 
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                
                test: /\.(sass|scss)$/,
                use: 
                [
                    MiniCssExtractPlugin.loader,
                    //devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: 
                        {
                            includePaths: ["./src/styles/style.scss"],
                            sourceMap: true,
                            importLoader: 2
                        }
                    },
                    "postcss-loader",
                    "sass-loader"
                ]
                
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['file-loader']
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
                filename: devMode ? '[name].css' : '[name].[hash].css',
                chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
            })
      ],
  };
  
  export default config;