const arr = [1,1,2,1,1];

function filter(arr, func){
    if(typeof arr !== 'object'){
        throw new Error('arr must be an array');
    }
    if(typeof func !== 'function'){
        throw new Error('func must be a function')
    }
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 1){
            console.log(true);
            return 0;
        }
    }
    console.log(false)
}

filter(arr, function(item, i, arr) {});