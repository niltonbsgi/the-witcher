const path = require('path');

const webpack = require('webpack');
module.exports = {
    entry: path.resolve('./src/main/index.js'),
    devtool:  'source-map',//(webpack.mode =='development'? 'source-map': 'none'),
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        },
        {
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'sass-loader']
        },
        {
          test: /\.(jpe?g|png|gif)$/,
          use: [{
            loader: 'url-loader',
            options: {
              limit: 10000
            }
          }]
        },
        {
          test: /\.(eot|svg|ttf|woff2?|otf)$/,
          use: 'file-loader'
        }
      ]
    },
    resolve: {
      extensions: ['*', '.js', '.jsx']
    },
    output: {
      path: path.resolve(__dirname + '/public'),
      publicPath: '/',
      filename: 'bundle.js'
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: 'chunks',
            chunks: 'all'
          }
        }
      }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
      contentBase: path.resolve('./public'),
      hot: true,
      port: 3000,
      historyApiFallback: true,
    }
  };
