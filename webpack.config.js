module.exports = {
  entry: "./web/assets/js/main.js",
  output: {
    path: __dirname,
    filename: "./web/assets/js/jquery-2.1.1.min.js"
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.scss$/, loader: "style!css!sass?outputStyle=expanded" },
      { test: /\.ejs$/, loader: "ejs-loader" }
    ]
  }
};