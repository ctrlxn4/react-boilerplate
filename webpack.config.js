const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');

const plugins = [
  new HtmlWebPackPlugin({
    template: "./src/templates/index.html",
    filename: "./index.html",
    inject: true,
  })
];

const rules = [
  {
    test: /\.jsx?$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
    }
  },
  {
    test: /\.css$/,
    use: [
      {
        loader: "style-loader"
      },
      {
        loader: "css-loader",
        options: {
          modules: true,
          importLoaders: 1,
          localIdentName: "[name]_[local]_[hash:base64]",
          sourceMap: true,
          minimize: true
        }
      }
    ]
  }
];

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules,
  },
  plugins,
};
