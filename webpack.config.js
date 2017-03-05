var path = require("path");
var webpack =require("webpack");

module.exports = {
    entry: [
        "./webpack_tut/src/main.js",
        "webpack/hot/dev-server",
        "webpack-dev-server/client?http://localhost:8080"
    ],
    output: {
        path: path.join(__dirname, "./webpack_tut/dist"),
        publicPath: "/webpack_tut/dist/",
        filename: "main.bundled.js"
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin()
    ]

}