const arr = [1,2,3];

function filter(arr, func){
    if(typeof arr !== 'object'){
        throw new Error('arr must be an array');
    }
    if(typeof func !== 'function'){
        throw new Error('func must be a function')
    }
    let greater =[];
    for(let i = 0; i < arr.length; i++){
            if(func(arr[i], i, arr)) {
                greater.push(arr[i]);
            }
    }
    return greater;
}

console.log(
    filter(arr, function(item, i, arr) {
        return  item > 1;
    }));