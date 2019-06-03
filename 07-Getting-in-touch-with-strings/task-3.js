const truncate = (string, maxlength) => {
    if(typeof string !== 'string'){
        throw new Error('First Parameter must be a string');
    }

    if(typeof maxlength !== 'number'){
        throw new Error('Second Parameter must be a number');
    }

    let lastIndex = maxlength - 3;
    string = string.slice(0, lastIndex);
    string += '...';
    return string;
};

console.log(truncate('I wanna to say next thing about this topic', 22));
