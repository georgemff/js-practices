function f(n) {
    if (typeof n === 'number') {
        var result = n;
        for (var i = 0; i < 2; i++) {
            result *= n;
        }
        return result;
    } else {
        throw new Error('parameter type is not a number');
    }
}

console.log(f(2));
