var numbers = [1, 2, 5, 9, 4, 13, 4, 10];

for (var i of numbers) {
    if (i === 4){
        console.log('Exist!');
        break;
    }
}
