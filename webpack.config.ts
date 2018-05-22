//import * as path from 'path';
const path = require('path');
import * as webpack from 'webpack';

const config: webpack.Configuration = {
    mode: 'production',
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
    },
    module: {
        rules: [
        {
            test: /\.css$/,      // Match any files that end with ".css"
            use: ['style-loader', 'css-loader'] // Pipe these files through style-loader upon import
        },
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
                } 
                    
                    
                    
            ]
            

            
                
        }
    ],
       
           

        
    }
  };
  
  export default config;