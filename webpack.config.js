var webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.join(__dirname, 'public/scripts');
const PUBLIC_DIR = path.join(__dirname, 'public');
const APP_DIR = path.join(__dirname, 'src');

const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
      'webpack-dev-server/client?https://0.0.0.0:8080',
      'webpack/hot/only-dev-server',
      'react-hot-loader/patch',
      './src/index.js'
  ],
  module: {
    rules: [
        {
            loader: 'babel-loader',
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            include: APP_DIR,
            options: {
              presets: [['env', {modules: false}], 'react'],
              plugins: ['lodash', 'syntax-dynamic-import', 'transform-class-properties' ]
            }
        },
        {
            test: /\.(s*)css$/,
            use: ['style-loader','css-loader', 'sass-loader'],
            exclude: /flexboxgrid/
        },
        {
          test: /\.css$/,
          loader: 'style-loader!css-loader?modules',
          include: /flexboxgrid/
        },
        {
            loader: 'json-loader',
            test: /.json$/
        },
        {
         test: /.(gif|ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
         loader: 'file-loader'
       }
    ]  
  },
  resolve: {
      alias: {
        app: APP_DIR,
        public: PUBLIC_DIR
      },
      extensions: ["*", ".js", ".jsx"]
  },
  output: {
    path: PUBLIC_DIR,
    filename: 'scripts/[name].[chunkhash].js',
    chunkFilename: 'scripts/[name].[chunkhash].chunk.js',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './public',
    hot: true,
    disableHostCheck: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HTMLWebpackPlugin({
            inject: false,
            filename: '200.html',
            template: 'src/200.ejs',
            minify: {
                collapseBooleanAttributes: true,
                removeComments: true,
                collapseWhitespace: true,
            }
        }),
  ]
};