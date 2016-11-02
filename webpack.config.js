var path = require("path");
var assetPath = path.join(__dirname, ".", "public");
var webpack = require('webpack');

function createConfig(isDebug) {

  const plugins = [];

  if(!isDebug){
    plugins.push(new webpack.optimize.UglifyJsPlugin());
  }

  return {

    entry: [
      './client/index.js'
    ],
    output: {
      path: assetPath,
      publicPath: '/',
      filename: 'bundle.js'
    },
    module: {
      loaders: [{
        exclude: path.join(__dirname, "..", "node_modules"),
        loader: 'babel'
      },
        { test: /\.js$/, loader:'eslint-loader', exclude: /node_modules/},
        {test: /(\.css)$/, loaders: ['style', 'css']},
        {
          test: /\.scss$/,
          loaders: ['style', 'css', 'autoprefixer?browsers=last 3 versions', 'sass?outputStyle=expanded']
        },
        {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
        {test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff"},
        {test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff"},
        {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
        {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'},
        {test: /\.(png|jpg)$/, loader: 'url-loader?limit=10000'}
      ]
    },
    devtool: 'source-map',
    resolve: {
      extensions: ['', '.js', '.jsx']
    },
    devServer: {
      historyApiFallback: true,
      contentBase: './'
    },
    plugins: plugins
  };
}

module.exports = createConfig(true);
module.exports.create = createConfig;