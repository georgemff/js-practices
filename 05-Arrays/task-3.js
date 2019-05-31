const arr = [2,2,2,2,2,2];

function every(arr, func){
    if(!Array.isArray(arr)){
        throw new Error('arr must be an array');
    }
    if(typeof func !== 'function'){
        throw new Error('func must be a function')
    }
    for(let i = 0; i < arr.length; i++){
        if(!func(arr[i], i, arr)){
            return false;
        };
    }
    return true;
}

console.log(every(arr, function(item, i, arr) {
        return item > 1;
    }
));