const mix = (...funcs) => {
    let result = {
        errors: [],

        value: 0
    };
    let i = 0;
    for(let func of funcs){
        i++;
        if(typeof func !== 'function'){
            throw new Error('Argument must be a function');
        }
        try {
            result.value = func(result.value);
        } catch(err) {
            result.errors.name = err.name;
            result.errors.message = err.message;
            result.errors.stack = err.stack;
            result.errors.level = i-1;
        }
    }
    return result;
};

console.log(mix(() => {    let sum = 0;
    return 0;
}, (prev) => {
    return prev + 1;
}, (prev) => {
    throw new RangeError('Range is wrong');
}, (prev) => {
    return prev * 3;
}));
// Function returns
//{
//     errors: [{
//         name: 'RangeError',
//         message: 'Range is wrong',
//         stack: '... stack of your error ...',
//         level: 2
//     }],
//         value: 3
// }