const HtmlWebpackPlugin = require('html-webpack-plugin');

const path=require("path");

module.exports ={
    
    entry:{
        main:"./src/index.js",
        vendor:"./src/vendor.js"
    },

    plugins: [new HtmlWebpackPlugin({
        template:"./src/template.html"
    })],
    module:{
        rules:[
            {
                test:/\.scss$/,
                use:["style-loader",//3.inject styles into dom
                    "css-loader",//2.turns css into commonjs
                    "sass-loader"//1.turns sass into css
                ]
            },
            {
                test: /\.html$/,
                use: ["html-loader"]
            },
            {
                test: /\.(svg|png|jpg|gif)$/,
                type: "asset/resource",
           },
        ]
    }
}