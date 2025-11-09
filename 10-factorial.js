const { argv } = require('node:process');

if (!isNaN(Number(argv[2]))){
    let a = Number(argv[2])
    function factorial(a){
        if (a === 0 || a === 1){
            return 1
        }else{
            return a*factorial(a-1);
        }
        
    }
    console.log(factorial(a))
}else{
    console.log(1)
}

