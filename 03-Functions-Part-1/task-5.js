var numbers=[1, 2, -4, 3, -9, -1, 7];
var positive=[];

function isPositive(n){
    if(typeof n !== 'number') {
        throw new Error('parameter type is not a Number');
    }
    if(n>=0){
        return true;
    } else {
        return false;
    }
}

for(var i of numbers){
    if(isPositive(i)){
        positive.push(i);
    }
}

console.log(positive);