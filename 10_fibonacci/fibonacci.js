const fib = function(n) {
    // note: n should be >=1. Inequality means the result for <=0 is defined, albeit "wrong".
    if (n < 3)
        return 1;
    else return fib(n-1)+fib(n-2);
}

const fibonacci = function(num) {
    let x=0;

    if (Number.isInteger(num))
        x = num;
    else if (typeof(num) === 'string') {
        x = +num;
    }
    else return 'OOPS';

    if (x>0)
        return fib(x);

    if (x==0)
        return 0;

    return 'OOPS';
};

// Do not edit below this line
module.exports = fibonacci;
