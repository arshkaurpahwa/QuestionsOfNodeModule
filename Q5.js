//move a file

let fs = require("fs");
let path = require("path");

let srcPath= path.join(__dirname,"file1.txt")
console.log(srcPath);

let destPath =path.join(__dirname,"newFolder","file1.txt");
console.log(destPath)
fs.copyFileSync(srcPath,destPath)

fs.unlinkSync(srcPath)
/* hmne file1.txt name ki file questions of node module me hi bnayi hai 
us file ko new folder me movekro   */