'use strict';
module.exports = {
  mode: 'development',
  entry: './js/script.js',
  output: {
    filename: 'bundle2.js',
    path: __dirname + '/js'
    
  },
  watch: true,

  devtool: "source-map",

  module: {  },
};
