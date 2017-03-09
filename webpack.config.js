var path = require("path");
var webpack =require("webpack");
var isEvnDevelopment = (process.env.NODE_ENV==="development");

var entry = isEvnDevelopment ? ["./webpack_tut/src/main.js","webpack/hot/dev-server","webpack-dev-server/client?http://localhost:8080"]
: [ "./webpack_tut/src/main.js"];
var plugins = isEvnDevelopment? [new webpack.HotModuleReplacementPlugin()] :[];


module.exports = {
    entry:entry,
    output: {
        path: path.join(__dirname, "./webpack_tut/dist"),
        publicPath: "/webpack_tut/dist/",
        filename: "main.bundled.js"
    },
    plugins:plugins
}