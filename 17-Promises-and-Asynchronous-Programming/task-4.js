const https = require('https');

class Countries{
    constructor(endpoint){
        if(typeof endpoint !== 'string'){
            throw new Error('Parameter must be a string');
        }
        this.url = endpoint;
    }
    send = (num) =>{
        if(typeof num !== 'number'){
            throw new Error('Parameter must be a number');
        }
        let url1 = this.url;
        const promise = new Promise(function(resolve, reject) {
             url1 += '?size=' + num;
            https.get(url1, response => {
                if (response.statusCode == 200) {
                    resolve(response);
                } else
                    reject(`We have error, status code: ${response.statusCode}`);
            });
        });
        return promise;
    }
}

const url = 'https://lab.lectrum.io/geo/api/countries';
const countries = new Countries(url);

(async() => {
    try {
        const data = await countries.send(2);
        console.log(data); // array of countries
    } catch (error) {
        console.log(error);
    }
})();
