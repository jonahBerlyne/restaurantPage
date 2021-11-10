const path = require("path");

module.exports = {
 entry: "./src/index.js",
 output: {
  filename: "",
  path: path.resolve(__dirname, "dist"),
 },
 module: {
  rules: [
   {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
     {
      loader: 'file-loader',
     },
    ],
   },
  ],
 },
};