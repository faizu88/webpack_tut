var devServer, webpack, config, path;

devServer = require("webpack-dev-server");
webpack = require("webpack");
config=require("./webpack.config.js");
path=require("path");

var compiler = webpack(config);
var server = new devServer(compiler,{
    hot:true,
    filename:config.output.filename,
    publicPath:config.output.publicPath,
    stats:{
        colors:true
    }
});
server.listen(8080,"localhost",function(){

})