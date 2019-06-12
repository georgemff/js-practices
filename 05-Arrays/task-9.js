function arrayFill(val, len){
    if (typeof val !== "number" && typeof val !== "string" && typeof val !== "object") {
        throw new Error('First parameter must be a number, string or object');
    }
    if (typeof len !== "number"){
        throw new Error('Second parameter must be a number');
    }
    let arr = [];
    for(let i=0; i<len; i++){
        arr[i] = val;
    }
    return arr;
}

console.log(arrayFill('x', 5));