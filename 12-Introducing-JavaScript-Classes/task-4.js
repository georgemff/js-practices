class MyString {
        reverse (string) {
            let stringArray = string.split('');
            let reverseArray = stringArray.reverse();
            let joinArray = reverseArray.join('');
            return joinArray;
        };

        ucFirst (string) {
            let upperCase = string.charAt(0).toUpperCase();
            return upperCase + string.slice(1);
        };

        ucWords (string){
            let words = string.split(' ');
            let upperArray = [];
            for(let word of words) {
                let upperCase = word.charAt(0).toUpperCase();
                upperArray.push(upperCase + word.slice(1));
            }
            return upperArray.join(' ');
        }
}

var str = new MyString();

console.log(str.reverse('abcde')); // print 'edcba'
console.log(str.ucFirst('abcde')); // print 'Abcde'
console.log(str.ucWords('abcde abcde abcde')); // print 'Abcde Abcde Abcde'