const person = {
    
    get salary(){
        if(daysInThisMonth() - currentDay() > 20){
            return this.salary = 'good salary';
        }
            return this.salary = 'bad salary';
    }
};
const daysInThisMonth = () => {
    var now = new Date();
    return new Date(now.getFullYear(), now.getMonth()+1, 0).getDate();
};
const currentDay = () =>{
    let now = new Date();
    return now.getDate();
};


console.log(person.salary);
