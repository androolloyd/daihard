const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        test: /\.slim$/,
        exclude: [/node_modules/, /bower_components/],
        use: {
          loader: "slim-lang-loader",
          options: {
            slimOptions: {
              pretty: true,
              chdir: true,
              include: true
            }
          }
        }
      }
    ]
  }
};
