
const extractCurrencyValue = (string) => {
    if(typeof string !== 'string'){
        throw new Error('Parameter must be a string');
    }
    string = string.replace('$', '');
    let num = parseFloat(string);
    return num;
};

console.log(extractCurrencyValue('$120'));
