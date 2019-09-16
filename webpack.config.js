/* eslint-disable */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin'); // 可以把缓存目录清掉
const VueLoaderPlugin = require('vue-loader/lib/plugin') // vue-loader@15时,请确保引入这个插件！
const CopyPlugin = require('copy-webpack-plugin'); // 拷贝静态资源

// 设置别名
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  entry: {
    app: "./src/main.js"
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js', // 用 webpack 1 时需用 'vue/dist/vue.common.js'
      '@': resolve('src'),
      '@pages': resolve('src/pages'),
      '@components': resolve('src/components'),
      '@test': resolve('test'),
      '@css': resolve('src/css'),
      '@js': resolve('src/js'),
    }
  },
  module: {
    rules: [{
      test: /\.html$/,
      loader: 'html-loader'
    },{
      test: /\.vue$/,
      loader: "vue-loader"
    },{
      test: /\.scss$/,
      use: [
        // MiniCssExtractPlugin.loader,
        'vue-style-loader',
        'css-loader',
        'sass-loader'
      ]
    },{
      test: /\.css$/,
      use: [
        'vue-style-loader',
        'css-loader'
      ]
    },{
      test: /\.(eot|svg|ttf|woff|woff2|bpmn)$/,
      loader: 'file-loader'
    },{
      test: /\.(jpe?g|png|gif|svg|bpmn)$/,
      loader: "url-loader"
    }]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new VueLoaderPlugin(),
    new CopyPlugin([
      {
        from: path.resolve(__dirname, './static'),
        to: 'static'
      }
    ])
  ],
  output: {
    filename: '[name].min.js',
    path: path.resolve(__dirname, 'dist')
  }
}
