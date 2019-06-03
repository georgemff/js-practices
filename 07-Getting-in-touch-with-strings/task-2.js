const checkSpan = (source, example) => {
    if (typeof source !== 'string' && typeof example !== 'string'){
        throw new Error('Parameters must be a string');
    }
    source = source.toLowerCase();
    example = example.toLowerCase();

    return  source.indexOf(example) === -1 ? false : true;
};

console.log(checkSpan('pitterXXX@gmail.com', 'xxx'));