const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "",
      template: "src/index.html",
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    historyApiFallback: true,
    compress: true,
    port: 9000,
  },
  devtool: "source-map"
};
