const path = require("path");
const glob = require("glob");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  // entry: glob.sync(__dirname + "/source/**/[^_]*.slim"),
  entry: "./source/_partials/_content_box_1.slim",
  // output: { path: __dirname + "/dist/test" },

  module: {
    rules: [
      {
        test: /\.slim$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: "html-loader",
              options: {
                minimize: false
              }
            },
            // {
            //   loader: "file-loader"
            // },
            {
              loader: "slim-lang-loader",
              options: {
                slimOptions: { pretty: true, chdir: true, include: true }
              }
            }
          ]
        })
      }
    ]
  },
  plugins: [new ExtractTextPlugin("[name].html")],
  
  // resolve: {
  //   extensions: [".slim"]
  // }
};
