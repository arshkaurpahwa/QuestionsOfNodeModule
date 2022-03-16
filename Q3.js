//copy index.html file from module1 to a new folder inside module2 having name html.
/* ek folder bnao module 1 usme ek index .html bnao ek aur folder bnao module 2 
index.html [module1 ] vli ko copy kro module 2 me  */
//Q. copy index.html file from module1 to a new folder inside module2 having name html.

let fs = require("fs");
let path = require("path");

let srcPath = path.join(__dirname,"module1","index.html")
console.log("source path --> ",srcPath);
let destPath = path.join(__dirname,"module2","index.html");
console.log("destination --> ",destPath);

fs.copyFileSync(srcPath,destPath);

