let path = require('path');
let MiniCssExtractPlugin = require('mini-css-extract-plugin');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let copyWebpackWplugin = require('copy-webpack-plugin');
let ImageminPlugin  = require('imagemin-webpack-plugin').default;


let conf = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'assets/js/[name].js',   
  },
  /* devtool: 'source-map', */
  devServer: {
    port: 8081,
    overlay: true,
    contentBase: path.resolve(__dirname, './dist')
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'assets/css/[name].css',
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new copyWebpackWplugin([
      { from: 'src/assets/img', to: 'assets/img' }, 
      { from: 'src/assets/fonts', to: 'assets/fonts' },
    ]),
    new ImageminPlugin({}),      
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {sourceMap: true, },
      }, 
      {
        test: /\.scss$/,
        use: [         
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              url: false
            }
          },
          {
            loader: 'postcss-loader',
            options: {              
              config: {
                path: 'postcss.config.js'
              }
            }
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: true }
          },
        ]
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { sourceMap: true }
          },
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: 'postcss.config.js'
              }
            }
          }
        ],
      },
    ]
  }
};

module.exports = conf;