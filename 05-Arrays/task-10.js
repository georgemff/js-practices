const arr = [3, 2, 1];
function reverse(arr) {
    if(!Array.isArray(arr)){
        throw new Error('Parameter must be an Array!');
    }
    if(arr.length === 0){
        throw new Error('Array can not be empty!');
    }
    let newArr = [];
    for(let i=1; i<=arr.length; i++){
        newArr[i-1] = arr[arr.length-i];
    }
    return newArr;
}
console.log(reverse(arr));