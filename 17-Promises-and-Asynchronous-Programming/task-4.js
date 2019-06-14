const fetchUrl = require("fetch").fetchUrl;
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
        let urll = this.url;
        const promise = new Promise(function(resolve, reject) {
             urll += '?size=' + num;
           fetchUrl(urll, function(error, meta, body){
                if(meta.status === 200){
                    const {data} = JSON.parse(body);
                    resolve(data);
                } else {
                    reject(`We have error, status code: ${meta.status}`);
                }
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
