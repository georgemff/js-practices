function getDivisors(n){
    if(typeof n !== 'number') {
        throw new Error('parameter type is not a Number');
    }
    if(n <= 0){
        throw new Error('parameter can\'t be a 0 or less than 0');
    }
    var divisors = [];

    for(var i = 1; i <=n; i++){
        if (n%i===0){
            divisors.push(i);
        }
    }

    return divisors;
}

console.log(getDivisors(12));
