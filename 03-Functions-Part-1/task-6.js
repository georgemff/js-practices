function isEven(n){
    if(typeof n !== 'number'){
        throw new Error('parameter type is not a Number');
    }

    if(n % 2 === 0){
        return true;
    } else {
        return false;
    }
}

console.log(isEven(3));