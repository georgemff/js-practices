const arr = ['abcd', 'abcde', 'ab', 'abc'];

let arrLength = arr.map((item, i, arr) => {
    return item.length;
});
console.log('Array Length with Array item: ' + arrLength);