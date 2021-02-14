const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    main1: './main1.js',
    main2: './main2.js',
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'public'),
  },
};