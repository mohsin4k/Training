function come(x){
    return function (y){
        return x*y; 
    }
}

console.log(come(3)(4));