var req = require('./file1');
console.log(">>>>>> ",req.test(), req.name);
document.getElementById("main").innerHTML="<p>"+req.name+"</p>";


if(module.hot){
    module.hot.accept();
}