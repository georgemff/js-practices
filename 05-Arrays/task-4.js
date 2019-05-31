const arr = [1,1,1,1,1];

function some(arr, func){
    if(!Array.isArray(arr)){
        throw new Error('arr must be an array');
    }
    if(typeof func !== 'function'){
        throw new Error('func must be a function')
    }
    for(let i = 0; i < arr.length; i++){
        if(func(arr[i], i, arr)){
            return true;
        };
    }
    return false;
}

console.log(some(arr, function(item, i, arr) {
        return item > 1;
    }
));