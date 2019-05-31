const mix = (...funcs) => {
    let result = 0;
    for(let func of funcs){
        if(typeof func !== 'function'){
            throw new Error('Argument must be a function');
        }
        result = func(result);
    }
    return result;
};

console.log(mix(() => {
    return 0;
}, (prev) => {
    return prev + 1;
}, (prev) => {
    return prev * 2;
}));