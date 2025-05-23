
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path=require("path");
const common= require('./webpack.common')
const {merge}=require('webpack-merge')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin=require('terser-webpack-plugin')
const HtmlWebpackPlugin=require('html-webpack-plugin')

module.exports = merge(common,{
    mode: "production",
    output:{
        filename: "[name].[contenthash].bundle.js",
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: "images/[name].[hash][ext]",
    },
    optimization:{
        minimizer:[
            new CssMinimizerPlugin(), // Minimize CSS
            new TerserPlugin(),
            new HtmlWebpackPlugin({
                template:"./src/template.html",
                minify:{
                    removeAttributeQuotes:true,
                    collapseWhitespace:true,
                    removeComments:true
                }     
            })
            ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(
            {filename:"[name].[contenthash].css"})
        , new CleanWebpackPlugin()],
    module:{
        rules:[
            {
                test:/\.scss$/,
                use:[
                    MiniCssExtractPlugin.loader,//3.Extract css into files
                    "css-loader",//2.turns css into commonjs
                    "sass-loader"//1.turns sass into css
                ]
            },
        ]
    }


});