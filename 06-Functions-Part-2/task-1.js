const obj = {
    getName: function(message) {
        return `${message}: ${this.name}`;
    }
};
const getName = obj.getName;
const f = bind(getName, {name: 'Pitter'}, 'My name');
console.log(f()); // My name: Pitter

function bind(getName, object, ...argument) {
    return () => getName.call(object, ...argument);
}