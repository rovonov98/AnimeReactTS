const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const { CleanWebpackPlugin }  = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = (_, { mode }) => ({
    entry: {
        main: path.resolve(__dirname, 'src', 'main.tsx'),
        // vendor: ['react', 'react-dom']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/AnimeReactTS/',
        filename: 
            mode === 'production'
            ? '[name].[contenthash].bundle.js'
            : '[name].bundle.js'
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    mode === 'production'
                    ? MiniCssExtractPlugin.loader
                    : 'style-loader',
                    'css-loader',
                    'postcss-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            additionalData: `
                                @import "src/assets/scss/global/variables.scss";
                                @import "src/assets/scss/global/mixins.scss";
                            `,
                        }
                    }
                ]
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/inline',
            },
        ]
    },
    devServer: {
        port: 3000,
        historyApiFallback: true
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Anime App',
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 
                mode === 'production' 
                ? '[name].[contenthash].bundle.css'
                : '[name].bundle.css'
        })
    ],
})