

const path=require("path");
const common= require('./webpack.common')
const {merge}=require('webpack-merge')
const HtmlWebpackPlugin=require('html-webpack-plugin')

module.exports = merge(common,{
    mode: "development",
    output:{
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: "./imgs/[name].[hash].[ext]",
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:"./src/template.html",
    
        })
    ],
    module:{
        rules:[
            {
                test:/\.scss$/,
                use:["style-loader",//3.inject styles into dom
                    "css-loader",//2.turns css into commonjs
                    "sass-loader"//1.turns sass into css
                ]
            },
        ]
    }

});