const path = require('path');
module.exports = {
  mode: 'development',
  entry: './src/browser.js', //클라이언트 사이드용 진입점
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: { loader: 'babel-loader' },
        exclude: /node_modules/
      }
    ]
  }
};