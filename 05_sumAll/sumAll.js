const sumAll = function(min, max) {
    let ret = 0;

    if (Number.isInteger(min) && min > 0) {
        if (Number.isInteger(max) && max > 0) {
            if (min > max) {
                let temp = min;
                min = max;
                max = temp;
            }
            for (let i=min; i<=max; i++)
            {
                ret += i;
            }
            return ret;
        }
    }

    return 'ERROR';
};

// Do not edit below this line
module.exports = sumAll;
