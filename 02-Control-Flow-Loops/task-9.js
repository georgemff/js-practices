var numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];
var primes = [];
for(i of numbers) {
    var a = 0;
    for(var j = 1; j <= i; j++){
        if(i % j === 0){
             a++;
        }
    }
    if(a < 3) {
        primes.push(i);
    }
}

console.log(primes);