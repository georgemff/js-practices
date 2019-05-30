const arr = [1,2,3];

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
        }
    }
}

filter(arr, function(item, i, arr) {
    console.log('Greate than 1 is: ' + item, ' with index: '+ i + ' in array: ' + arr)
});