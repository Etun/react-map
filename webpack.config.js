const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const sourcePath = path.join(__dirname, './src');
const buildPath = path.join(__dirname, './build');
const assetsPath = path.join(__dirname, './src/assets');

const devHost = process.env.DEV_HOST || 'localhost';
const devPort = process.env.DEV_PORT || 3003;
const nodeEnv = process.env.NODE_ENV || 'development';
const isProduction = nodeEnv === 'production';

//TODO: Configured only development mode

const plugins = [
  new HtmlWebpackPlugin({
    template: path.join(sourcePath, 'index.html'),
    path: buildPath,
    filename: 'index.html',
    inject: 'body'
  }),
];

const rules = [
  {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: [
      'babel-loader',
    ],
  },
  {
    test: /\.scss$/,
    exclude: /node_modules/,
    use: [
      'style-loader',
      'css-loader?&modules',
      'sass-loader?sourceMap',
    ]
  },
  {
    test: /\.(png|woff|woff2|eot|ttf|svg)$/,
    include: assetsPath,
    use: 'url-loader?limit=20480&name=assets/fonts/[name]-[hash:base64:5].[ext]',
  },
];

module.exports = {
  mode: isProduction ? 'production' : 'development',
  context: sourcePath,
  entry: {
    js: './index.js'
  },
  output: {
    path: buildPath,
    publicPath: '/',
    filename: 'assets/js/app-[hash].js'
  },
  module: {
    rules,
  },
  plugins,
  devServer: {
    contentBase: './src',
    historyApiFallback: true,
    host: devHost,
    port: devPort,
  }
};
