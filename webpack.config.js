const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname)
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|dae)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      }
    ]
  },
  mode: 'development'
};