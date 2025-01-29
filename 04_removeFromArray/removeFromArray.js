const removeFromArray = function() {
    let ret = [];

    let src = arguments[0];
    for (let i=0; i<src.length; i++) {
        let skipItem = 0;
        for (let j=1; j<arguments.length; j++) {
            if (src[i] === arguments[j])
                skipItem = 1;
        }
        if (!skipItem)
            ret.push(src[i]);
    }

    return ret;
};

// Do not edit below this line
module.exports = removeFromArray;
