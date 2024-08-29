/* eslint-disable no-undef */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const prod = process.env.NODE_ENV === 'production';

module.exports = {
  mode: prod ? 'production' : 'development',
  entry: './src/index.tsx', //? Webpack starts bundling from here
  output: {
    path: __dirname + '/dist/', //? Where the bundled files will be output
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        resolve: {
          extensions: ['.ts', '.tsx', '.js', '.json'] //? Resolve these files
        },
        use: 'ts-loader' //? For transpile TypeScript files
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'] //? style-loader injects CSS into the DOM, css-loader parses CSS files, and postcss-loader processes CSS with PostCSS.
      }
    ]
  },
  devServer: {
    historyApiFallback: true //? Useful for single-page applications (SPAs) that use client-side routing. (If we not use it on refresh we got an error of "cannot GET")
  },
  devtool: prod ? undefined : 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html' //? This generate index.html file in "dist". including bundled javascript.
    }),
    new MiniCssExtractPlugin() //? Generate a seperate css file to avoid inline CSS and improve loading performance (No need in this project)
  ]
};
