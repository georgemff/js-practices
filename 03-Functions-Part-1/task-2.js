function f(){
 //   return typeof arguments;
    for (var i of arguments){
        if (typeof i !== 'number'){
            throw new Error('all parameters should be a number');
        }
    }
        var sum = 0;
        for (var j of arguments) {
            sum += j;
        }
        return sum;
}

console.log(f(5,6,7,'s'));
