var arr = [1,2,3,4];
var sum = 0;

for(var i of arr){
    if(i > 3 && i%2===0){
        sum += i;
    }
}
console.log(sum);