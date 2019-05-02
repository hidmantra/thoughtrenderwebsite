const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const path = require('path');
module.exports = merge(common,
{
    "mode": "development",
    /*"entry": "src/index.js",
    "output": {
        "path": __dirname+'/static',
        "filename": "[name].[chunkhash:8].js"
    },*/
    "devtool": "source-map",
    "devServer": {
        "contentBase": './dist',
        "hot": true
      },
    "module": {
        "rules": [
            {
                "enforce": "pre",
                "test": /\.(js|jsx)$/,
                "exclude": /node_modules/,
                "use": "eslint-loader"
            },
            {
                "test": /\.tsx?$/,
                "exclude": /node_modules/,
                "use": {
                    "loader": "awesome-typescript-loader",
                   // "loader": "ts-loader",
                    "options": {
                        "transpileOnly": false,
                        "useBabel": false,
                        "babelCore": "@babel/core" // needed for Babel v7
                        }

                        
                    }
                }
            
        ]
    }
});