const upperCaseFirst = (string) => {
    if(typeof string !== 'string'){
        throw new Error('Parameter must be a string');
    }
    let upperCased = string.charAt(0).toUpperCase();
    upperCased += string.slice(1);
      return upperCased;
};

console.log(upperCaseFirst('hello'));
