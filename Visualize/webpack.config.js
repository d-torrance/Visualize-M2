const path = require('path');

module.exports = {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'js'),
    filename: 'm2-visualize.js',
  },
  module: {
    rules: [
      {
        test: require.resolve('clipboard'),
        loader: 'expose-loader',
        options: {
          exposes: 'ClipboardJS',
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
