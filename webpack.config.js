/* eslint-disable @typescript-eslint/no-var-requires */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const PrettierPlugin = require('prettier-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const path = require('path');

module.exports = {
  entry: {
    main: path.resolve(__dirname, './src/app.ts'),
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './build'),
  },
  devServer: {
    contentBase: './build',
    open: true,
    hot: true,
    // writeToDisk: true, // don't just keep changes in memory
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html'),
    }),
    new ESLintPlugin(),
    // Check out typescript at build time
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        diagnosticOptions: {
          semantic: true,
          syntactic: true,
        },
        mode: 'write-references',
      },
    }),
    new PrettierPlugin(),
  ],
  module: {
    rules: [
      // Babelify TS to JS
      {
        test: /\.(ts|js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            // Tell babel to compile the typescript
            presets: ['@babel/preset-env', '@babel/preset-typescript'],
          },
        },
      },
      {
        test: /\.css$/,
        // css-loader: convert css to JS which we can import
        // stlye-loader: inject the imported css into the document
        use: ['style-loader', 'css-loader'],
      },
      // Images
      {
        test: /\.(gif|png|jpg|jpeg|svg)$/i,
        type: 'asset|resource',
      },
    ],
  },
};
