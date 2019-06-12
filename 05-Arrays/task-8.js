const arr = [[[1, 2], [1,2]], [[1, 2], [1,2]]];
const arr2 = [[[[[1,2]]]]];
const arr3 = [[[[[1,2]]],2],1];
const arr4 = [[[[[]]]]];
const arr5 = [[[[[],3]]]];

function f(arr){
    if(!Array.isArray(arr)){
        throw new Error('Argument must be an Array');
    }
    let result = 0;
    for(let i = 0; i<arr.length; i++) {
        if (Array.isArray(arr[i])) {
            result += f(arr[i]);
        } else if (typeof arr[i] === 'number') {
                result += arr[i];
            } else {
                throw new Error('Array elements must be a number');
            }
        }
    return result;
}

console.log(f(arr));
console.log(f(arr2));
console.log(f(arr3));
console.log(f(arr4));
console.log(f(arr5));
