const path = require('path');

const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const dirs = require('./dirs');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    devtool: 'eval-source-map',
    entry: {},
    output: {
        path: dirs.DIST,
        filename: '[name].[contenthash].js',
    },
    devServer: {
        open: true,
        contentBase: path.join(__dirname, '..'),
        port: 2333,
        liveReload: true,
    },
    plugins: [
        new ForkTsCheckerWebpackPlugin({}),
        new MiniCssExtractPlugin({
            path: dirs.DIST,
            filename: '[contenthash].css',
        }),
        new HtmlWebpackPlugin({
            template: dirs.INDEX,
            chunks: ['bundle'],
            chunksSortMode: 'manual',
            nodeModules: dirs.NODE_MODULES,
        }),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorPluginOptions: {
                preset: [
                    'default',
                    {
                        discardComments: {
                            removeAll: true,
                        },
                        normalizeUnicode: false,
                    },
                ],
            },
            canPrint: true,
        }),
    ],
});
