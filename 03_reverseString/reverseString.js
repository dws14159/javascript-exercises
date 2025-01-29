const reverseString = function(text) {
    let ret = "";

    for (let i=1; i<=text.length; i++)
        ret += text[text.length-i];

    return ret;
};

// Do not edit below this line
module.exports = reverseString;
