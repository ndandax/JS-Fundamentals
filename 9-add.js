const { argv } = require('node:process');
let a = Number(argv[2])
let b = Number(argv[3])
function add(a, b){
    console.log(a+b)
}
add(a, b)