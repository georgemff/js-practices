const https = require('https');
const send = url =>
    new Promise((resolve, reject) => {
        https.get(url, response => {
            if (response.statusCode == 200) {
                resolve(response);
            } else
                reject(`We have error, status code: ${response.statusCode}`);
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
