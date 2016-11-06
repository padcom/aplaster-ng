var webpack = require('webpack')
var path = require('path')

var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/main/main.js',
  output: {
    path: path.resolve(__dirname, './target'),
    filename: 'aplaster.js'
  },
  module: {
    loaders: [
      { enforce: 'pre', test: /\.vue$/, loader: 'eslint', exclude: /node_modules/, options: { formatter: require('eslint-friendly-formatter') } },
      { enforce: 'pre', test: /\.js$/, loader: 'eslint', exclude: /node_modules/, options: { formatter: require('eslint-friendly-formatter') }  },
      { test: /\.vue$/, loader: 'vue' },
      { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
      { test: /\.(png|jpg|gif|svg)$/, loader: 'file', options: { name: '[name].[ext]?[hash]' } }
    ]
  },
  resolve: {
    extensions: [ '.js', '.vue' ],
    alias: {
      'vue$': 'vue/dist/vue',
      'src': path.resolve(__dirname, './src'),
      'assets': path.resolve(__dirname, './src/main/assets'),
      'components': path.resolve(__dirname, './src/main/components'),
      'pages': path.resolve(__dirname, './src/main/pages'),
      'filters': path.resolve(__dirname, './src/main/filters')
    }
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/main/index.html' })
  ],
  devServer: {
    historyApiFallback: true,
    stats: {
      colors: true,
      chunks: false
    },
    proxy: {
      '/ip': { target: 'http://ip.jsontest.com', changeOrigin: true, pathRewrite: { '^/ip': '' } },
      '/api': { target: 'http://localhost:3000' },
      '/updates': { target: 'http://localhost:3000', ws: true }
    }
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
