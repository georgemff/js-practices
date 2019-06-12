function f(n){
    if(typeof n !== 'number'){
        throw new Error('parameter type is not a Number');
    }
    if(n < 1 || n > 7){
        throw new Error('parameter should be in the range of 1 to 7');
    }
        switch (n) {
            case 1:
                console.log('კვირა');
            break;
            case 2:
                console.log('ორშაბათი');
                break;
            case 3:
                console.log('სამშაბათი');
                break;
            case 4:
                console.log('ოთხშაბათი');
                break;
            case 5:
                console.log('ხუთშაბაში');
                break;
            case 6:
                console.log('კვირა');
                break;
            case 7:
                console.log('შაბათი');
                break;
        }

}
f(7);
