const arr = [1,2,3];
function forEach(arr, func){
    if(typeof arr !== 'object'){
        throw new Error('arr must be an array');
    }
    if(typeof func !== 'function'){
        throw new Error('func must be a function')
    }
    for(let i = 0; i < arr.length; i++){
        func(arr[i], i, arr);
    }
};

forEach(arr, function(item, i, arr){
    console.log('item: ' + item + ' index: ' + i + ' array: ' + arr);
});