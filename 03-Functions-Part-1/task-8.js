function f(numbers){
    if(!Array.isArray(numbers)){
        throw new Error('parameter type should be an array');
    }
    if(numbers.length === 0){
        throw new Error('parameter can\'t be an empty');
    }
    console.log(numbers[0]);
    numbers.splice(0,1);
    f(numbers);
}
var arr = [1, 2, 3];
f(arr);