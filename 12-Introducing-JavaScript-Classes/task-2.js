class Worker {
    constructor (name, surname, rate, days) {
        this._name = name;
        this._surname = surname;
        this._rate = rate;
        this._days = days;
    }
        getName = () => this._name;
        getSurname = () => this._surname;
        getRate = () => this._rate;
        getDays = () => this._days;
        getSalary = () =>  this._rate*this._days;

}

let worker = new Worker('John', 'Smith', 10, 31);

console.log(worker.getName()); // print 'John'
console.log(worker.getSurname()); // print 'Smith'
console.log(worker.getRate()); // print 10
console.log(worker.getDays()); // print 31
console.log(worker.getSalary()); // print 310 - because 10*31