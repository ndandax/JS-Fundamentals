const { argv } = require('node:process');

if (!isNaN(Number(argv[2]))){
    let j = Number(argv[2])
    let row = "*".repeat(j)
    for (let i = 0; i < j; i++){
        
        console.log(row);
    }
}else{
    console.log("Missing size")
}

