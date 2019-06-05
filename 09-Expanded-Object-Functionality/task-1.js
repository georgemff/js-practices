Object.prototype.extend = function(source) {
    let keys = Object.keys(source);
        for(key of keys){
            if(!data.hasOwnProperty(key)){
                Object.defineProperty(data, key, Object.getOwnPropertyDescriptor(source, key) );
            }
        }
};
Object.defineProperty(Object.prototype, 'extend', {enumerable: false} );
const data = { a: 'a'};
const source = { a: 'A', b: 'b'};
Object.defineProperty(source, 'b', { writable: false });
data.extend(source);

console.log(data); // { a: 'a', b: 'b' }
console.log(Object.getOwnPropertyDescriptor(data, 'b').writable); // false




