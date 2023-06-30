function cashFunction(fn) {
    const cash = {};
    return function(n) {
        if(cash[n]) {
            console.log('Grabbed from cash: ', cash[n]);
            return cash[n];
        }
        let result = fn(n);
        console.log('Counted by function: ', result);
        cash[n] = result;
        return result;
    }
}

function fuctorial(n) {
    let result = 1;
    while(n != 1) {
        result *= n;
        n -= 1;
    }
    return result;
}

const cashFactorial = cashFunction(fuctorial);

cashFactorial(5)
cashFactorial(7)
cashFactorial(10)
cashFactorial(5)
cashFactorial(7)
cashFactorial(3)
