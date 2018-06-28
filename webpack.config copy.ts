import * as webpack from 'webpack';
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== 'production';
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
console.log("dev mode:>>> ", devMode);
const config: webpack.Configuration = 
{
    mode: 'production',
    entry:[ './src/index.ts', './src/styles/style.scss' ],
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
      },
    output: 
    {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].bundle.js',
      publicPath: '/'
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
            }),
            new CleanWebpackPlugin(['dist'])
            
            ,new HtmlWebpackPlugin (
            {
                title: 'Thought Render'
            })
            
      ],
  };
 export default config;