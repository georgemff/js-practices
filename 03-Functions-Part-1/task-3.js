function f(a, b, c){

    for(var i of arguments){
        if (typeof i !== 'number') {
            throw new Error('all parameters type should be a Number');
        }
    }
        var result = (a - b) / c;
        return result;

}

console.log(f(10, 's', 2));
