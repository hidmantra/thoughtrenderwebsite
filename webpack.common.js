const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
//const ExtractTextPlugin = require("extract-text-webpack-plugin");
const devMode = process.env.NODE_ENV !== 'production';
const HtmlWebpackPlugin = require('html-webpack-plugin');

var TsConfigPathsPlugin = require('awesome-typescript-loader').TsConfigPathsPlugin;

module.exports = 
{
    
    entry:[ './src/index.ts', './src/styles/style.scss' ],
    output: 
    {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].bundle.js',
      publicPath: ''
    },
    module: 
    {
        rules: 
        [
            {
              /*
                test: /\.css$/, 
                use: 
                ['css-hot-loader'].concat(ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                  }))
              */
                /*
                [
                    'style-loader', 'css-loader'
                ]
                */
                /*
                [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    { loader: 'css-loader', options: { importLoader : 1 } }
                    ,'postcss-loader'
                ] 
                */
            },
            {
                test: /\.tsx?$/,
                //use: 'ts-loader',
                use: 'awesome-typescript-loader',
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
            },
            {
                test: /\.(mov|mp4)$/,
                use: 
                [
                    {
                        loader: 'file-loader',
                        options: 
                        {
                            name: '[name].[ext]'
                        }  
                    }
                ]
            }
        ],  
    },
    resolve: 
    {
        extensions: [ '.tsx', '.ts', '.js' ],
        plugins: [
            new TsConfigPathsPlugin(),
            
                
            
        ]
    },
    plugins: 
      [
            new MiniCssExtractPlugin (
            {
                filename: devMode ? '[name].css' : '[name].[hash].css',
                chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
            }),
            new HtmlWebpackPlugin (
            {
                title: 'Thought Render',
                template: './src/template.html'
            }),
            new webpack.NamedModulesPlugin(),
            new webpack.HotModuleReplacementPlugin()
      ],
  };
 