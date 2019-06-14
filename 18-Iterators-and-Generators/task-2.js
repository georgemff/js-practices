class Customers {
    constructor() {
        this.customers = [];
    }

    add(customer) {
        if (typeof customer !== "object") {
            throw new Error('Parameter must be a Object');
        }
        if (!customer.name) {
            throw new Error('Name is required');
        }
        this.customers.push(customer);
    }

    *[Symbol.iterator]() {
        for (let customer of this.customers) {
            if (customer.verified) {
                yield customer;
            }
        }
    }
}

const customers = new Customers();
customers.add({name: 'Alex'});
customers.add({name: 'Victor'});
customers.add({name: 'Marcus'});
customers.add({name: 'Andrii', verified: true});
customers.add({name: 'Marco', verified: true});
customers.add({name: 'Oliver'});
customers.add({name: 'Lisa', verified: true});
customers.add({name: 'John'});
customers.add({name: 'Ivan', verified: true});

for (const customer of customers) {
    console.log(customer);
}

// console log
// { name: 'Andrii', verified: true }
// { name: 'Marco', verified: true }
// { name: 'Lisa', verified: true }
// { name: 'Ivan', verified: true }
