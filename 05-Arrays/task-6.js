const arr = [1, 2, 3];
const acc = 0;

function reduceRight(arr, func, acc1){
    if(typeof arr !== 'object'){
        throw new Error('arr must be an array');
    }
    if(typeof func !== 'function'){
        throw new Error('func must be a function');
    }
    if(typeof acc1 !== 'string' && typeof acc1 !== 'number'){
        throw new Error('acc1 must be a string or number');
    }
    let sum = acc1;
    for(let i=arr.length-1; i>=0; i--){
        func(sum, arr[i], i, arr);
        sum += arr[i];
    }
    return sum;
}

console.log(reduceRight(arr, function(acc, item, i, arr) {
    return acc + item;
}, acc));