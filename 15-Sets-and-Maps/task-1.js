class DB  {
    constructor() {
    this.user = new Map();
    this.userid = 0;
};
    create(person){
        if(typeof person !== 'object') {
            throw new Error('parameter must be an Object!');
        }
        if(!person.name || !person.age || !person.country || !person.salary){
            throw new Error('Field is required');
        }
        if(typeof person.name !== 'string'){
            throw new Error('Name must be a string');
        }
        if(typeof person.age !== 'number'){
            throw new Error('Age must be a number');
        }
         if(typeof person.country !== 'string'){
             throw new Error('Country must be a number');
         }
         if(typeof person.salary !== 'number'){
             throw new Error('Salary must be a number');
         }
        let id = 'userID: ' + this.userid;
         this.userid++;
        this.user.set(id,person);
        this.user.get(id).id = id;
        return id;
    }

    read(id){
        if(typeof id !== 'string'){
            throw new Error('Parameter must be a String!');
        }
        if(arguments.length === 0){
            throw new Error('Parameter is Empty!');
        }
        if(!this.user.has(id)) {
            return null;
        }
            return this.user.get(id);
    }

    readAll(){
        if(arguments.length > 0){
            throw new Error('Unexpected Parameters!');
        }
        let arr = [];
        arr.push(...this.user.values());
        return arr;
    }

    update(id, object){
        if(!id){
            throw new Error('Incorrect ID!');
        }
        if(typeof id !== 'string'){
            throw new Error('ID must be a String!');
        }
        if(typeof object !== 'object'){
            throw new Error('Invalid Parameter!');
        }
        if(!this.user.has(id))
        {
            throw new Error('User with this ID do not Exists!');
        }
        for(let i in this.user.get(id))
        {
            if(!(object.hasOwnProperty(i)))
            {
                continue;
            }
            Object.defineProperty(this.user.get(id),i,
                {
                    value: object[i]
                }
            );
        }
        return id;
    }

    delete(id){
         if(this.user.has(id)){
             this.user.delete(id);
             return true;
         }
         else throw new Error('User with this ID do not exists!');
    }
}

const db = new DB();

const person = {
    name: 'Pitter', // required field with type string
    age: 21, // required field with type number
    country: 'ge', // required field with type string
    salary: 500 // required field with type number
};
const person1 = {
    name: 'joe', // required field with type string
    age: 23, // required field with type number
    country: 'eu', // required field with type string
    salary: 800 // required field with type number
};

const id = db.create(person);
const id1 = db.create(person1);
const customer = db.read(id);
console.log(customer);
const customers = db.readAll(); // array of users
console.log(customers);
console.log(db.update(id, { age: 22 })); // id
console.log(db.delete(id)); // true