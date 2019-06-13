class DB  {
    constructor() {
    this.user = new Map();
};
     create(person){
        if(typeof person !== 'object') {
            throw new Error('parameter must be an Object!');
        }
        if(!person.name || !person.age || !person.country || !person.salary){
            throw new Error('Field is required');
        }
        let id = 'userID: ' + this.user.size;
        this.user.set(id,person);
        return id;
    }

    read(id){
        if(typeof id !== 'string'){
            throw new Error('Parameter must be a String!');
        }
        if(arguments.length === 0){
            throw new Error('Parameter is Empty!');
        }
        if(this.user.has(id))
        {
            return this.user.get(id);
        } else return null;
    }

    readAll(){
        if(arguments.length > 0){
            throw new Error('Unexpected Parameters!');
        }
        let arr = [];
        arr.push(...this.user.entries());
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

const id = db.create(person);
const customer = db.read(id);
const customers = db.readAll(); // array of users
console.log(customers);
console.log(db.update(id, { age: 22 })); // id
console.log(db.delete(id)); // true