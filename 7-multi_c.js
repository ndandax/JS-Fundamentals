const { argv } = require('node:process');

if (!isNaN(Number(argv[2]))){
    let j = Number(argv[2])
    for (let i = 0; i < j; i++){
        console.log("C is fun");
    }
}else{
    console.log("Missing number of occurrences")
}

