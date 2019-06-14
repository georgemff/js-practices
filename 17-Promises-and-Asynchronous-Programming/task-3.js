const fetchUrl = require("fetch").fetchUrl;
const send = url =>
    new Promise((resolve, reject) => {
        fetchUrl(url, function(error, meta, body){
            if(meta.status === 200){
                const {data} = JSON.parse(body);
                resolve(data);
            } else {
                reject(`We have error, status code: ${meta.status}`);
            }
        });
    });

const url = 'https://lab.lectrum.io/geo/api/countries?size=2';
send(url)
    .then(data => {
    console.log(data);
})
.catch(error => {
    console.log(error);
});
