const compose = (...funcs) => {
     const retFunc = (a) => {
        return funcs.reduceRight((b, c) => {
            if (typeof c !== 'function') {
                throw new Error('parameter must be a function');
            }
            return c(b);
        }, a)
    };
    return retFunc;
};

console.log(
    compose((str) => {
        return str + 'c';
    }, (str) => {
        return str + 'b';
    })('a'));// 'abc'

