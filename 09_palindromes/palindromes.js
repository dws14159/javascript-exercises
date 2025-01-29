const palindromes = function (str) {
    let rev="";
    let nonrev="";

    str = str.toLowerCase();
    let validChars="abcdefghijklmnopqrstuvwxyz0123456789";

    for (let i=0; i<str.length; i++) {
        if (validChars.includes(str[i])) {
            nonrev += str[i];
            rev = str[i] + rev;
        }
    }

    return rev === nonrev;
};

// Do not edit below this line
module.exports = palindromes;
