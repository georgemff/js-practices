Object.prototype.mergeDeepRight = function(object) {
    arrFunction(this, object);

    function arrFunction(data, source){
        let keys = Object.keys(source);
        keys.forEach(function(key){
            data[key] = source[key];
            if(typeof source[key] === 'object' && !Array.isArray(source[key])){
                arrFunction(data[key], source[key]);
           }  else if (Array.isArray(source[key])){
                data[key].push(...source[key]);
            }
       });
    }
};

Object.defineProperty(Object.prototype, 'mergeDeepRight', {enumerable: false} );

const data = {
    name: 'fred',
    age: 10,
    contact: {
        email: 'moo@example.com',
        meta: {
            verified: true,
            tags: ['important']
        }
    }
};

data.mergeDeepRight({
        age: 40,
        contact: {
            email: 'baa@example.com',
            favorite: true,
            meta: {
                tags: ['vip']
            }
        },
    nope: {
        value: 'nope'
        }
    });
console.log(data);

// Output:
//
// {
//     name: 'fred',
//         age: 40,
//     contact: {
//     email: 'baa@example.com',
//         favorite: true,
//         meta: {
//         verified: true,
//             tags: ['vip', 'important']
//     }
// }
// }