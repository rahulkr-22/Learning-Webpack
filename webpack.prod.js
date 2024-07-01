
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path=require("path");
const common= require('./webpack.common')
const {merge}=require('webpack-merge')

module.exports = merge(common,{
    mode: "production",
    output:{
        filename: "[name].[contenthash].bundle.js",
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: "images/[name].[hash][ext]",
    },
    plugins: [new CleanWebpackPlugin()]

});