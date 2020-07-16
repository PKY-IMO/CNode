const merge = require("webpack-merge");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const dirs = require("./dirs");

const common = require("./webpack.common.js");

module.exports = merge(common, {
    devtool: "eval-source-map",
    entry: {
    },
    output: {
        path: dirs.DEST,
        filename: "[name].[contenthash].js",
    },
    devServer: {
        contentBase: path.join(__dirname, ".."),
        port: 9002,
        liveReload: true,
    },
    plugins: [
        new MiniCssExtractPlugin({
            path: dirs.DEST,
            filename: "[contenthash].css",
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "../index.html"),
            chunks: ["bundle"],
            chunksSortMode: "manual",
            nodeModules: path.resolve(__dirname, "../node_modules"),
        }),
        new ForkTsCheckerWebpackPlugin({
            watch: ["./typescript"],
        }),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require("cssnano"),
            cssProcessorPluginOptions: {
                preset: ["default", {
                    discardComments: {
                        removeAll: true,
                    },
                    normalizeUnicode: false,
                }],
            },
            canPrint: true,
        }),
    ],
});
