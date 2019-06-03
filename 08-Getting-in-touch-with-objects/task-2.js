const person = {
    get salary(){
        if(!person.rate){
            return 0;
        }
        let  date = new Date();
        return this.rate * date.getDate();
    }
};

Object.defineProperty(person, 'rate', {
    writable: true,
    configurable: false,
    enumerable: false,
});
person.rate = 30;
console.log(person.salary);