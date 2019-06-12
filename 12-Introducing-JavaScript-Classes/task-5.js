class Validator {
    isEmail (email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    };

    isDate (date) {
        return !isNaN(Date.parse(date));
    };

    isDomain (domain) {
        let format = /[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+/;
        return format.test(String(domain).toLowerCase());
    };

    isPhone (phone) {
        let format = /^\+?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{2})?[-. ]?([0-9]{2})?[-. ]?([0-9]{2})$/;
        return format.test(String(phone).toLowerCase());
    };
}

let validator = new Validator();
console.log(validator.isEmail('jshtml@gmail.ru'));
console.log(validator.isDomain('jsshtml.net'));
console.log(validator.isDate('12.05.2020'));
console.log(validator.isPhone('+995-599-45-18-25')); // it can be format of your country