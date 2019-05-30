const arr = [2,2,3,2,2,2];

function filter(arr, func){
    if(typeof arr !== 'object'){
        throw new Error('arr must be an array');
    }
    if(typeof func !== 'function'){
        throw new Error('func must be a function')
    }
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 1){
            func(arr[i], i, arr);
        } else {
            console.log(false);
            return 0;
        }
    }
    console.log(true)
}

filter(arr, function(item, i, arr) {}
);