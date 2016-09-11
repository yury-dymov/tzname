var webpack       = require('webpack');
var path          = require('path');

module.exports = {
  entry:   [
    './src/index'
  ],
  output:  {
    path:          path.join(__dirname, 'dist'),
    filename:      'bundle.js',
    libraryTarget: 'umd'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin()
  ],
  module:  {
    loaders: [
      { include: /\.js$/, loader: 'babel', exclude: /node_modules/ },
      { include: /\.json$/, loader: 'json-loader', exclude: /node_modules/ }
    ]
  },
  resolve: {
    root: path.join(__dirname, 'src'),
    modulesDirectories: [ 'node_modules' ],
    extensions: ['', '.json', '.js']
  }
};
