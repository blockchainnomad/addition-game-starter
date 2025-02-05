const webpack = require('webpack')
const path = require('path')
const fs = require('fs')
const CopyWebpackPlugin = require("copy-webpack-plugin");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")

module.exports = {
  resolve: {
    fallback: {
      "fs": false
    }
  },
  entry: "./src/index.js",
  mode: 'development',
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new NodePolyfillPlugin(),
    new webpack.DefinePlugin({
      DEPLOYED_ADDRESS: JSON.stringify(fs.readFileSync('deployedAddress', 'utf8').replace(/\n|\r/g, "")),
      DEPLOYED_ABI: fs.existsSync('deployedABI') && fs.readFileSync('deployedABI', 'utf8'),
    }),
    new CopyWebpackPlugin(
      {
        patterns: [
          { from: "./src/index.html", to: "index.html" }
        ]
      }
    )
  ],
  // devServer: { contentBase: path.join(__dirname, "dist"), compress: true }
}