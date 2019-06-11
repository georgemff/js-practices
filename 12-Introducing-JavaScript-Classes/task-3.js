class Worker {
    constructor (name, surname, rate, days) {
        this._name = name;
        this._surname = surname;
        this._rate = rate;
        this._days = days;
    }
        setRate = (rate) => this._rate = rate;
        setDays = (days) => this._days = days;
        getName = () => this._name;
        getSurname = () => this._surname;
        getRate = () => this._rate;
        getDays = () => this._days;
        getSalary = () => this._rate * this._days;

}

let worker = new Worker('John', 'Smith', 10, 31);

console.log(worker.getRate()); // print 10
console.log(worker.getDays()); // print 31
console.log(worker.getSalary()); // print 310 - because 10*31

// Now using setters:
worker.setRate(20); // increase rate
worker.setDays(10); // decrease days
console.log(worker.getSalary()); // print 200 - because 20*10