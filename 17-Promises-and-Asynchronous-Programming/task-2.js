const getCustomers = (customer, country) => {
    return promise = new Promise(function(resolve, reject){
        let arr = [];
        let i = 0;
    customer.forEach(function(obj){
        let result = false;
       if(obj.verified){
           country.forEach(function(countryObj){
              if(obj.id === countryObj.id){
                  obj.country = countryObj.country;
                  arr.push(obj);
                  result = true;
              }
           });
           if(!result) {
               reject(`We don't have information about country for this customer: ${obj.name}`);
           }
       }
       i++;
    });
        resolve(arr);
    })};

const customers = [
    {
        id: 'A1',
        name: 'Oliver',
        verified: true
    },
    {
        id: 'A2',
        name: 'alex',
        verified: true
    }
];

const countries = [
    {
        id: 'A1',
        country: 'usa'
    },
    {
        id: 'A2',
        country: 'poland'
    }
];

getCustomers(customers, countries)
    .then((customers) => console.log(customers))
    .catch(error => console.log(error));

