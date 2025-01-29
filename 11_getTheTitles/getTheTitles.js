const getTheTitles = function(books) {
    let ret=[];
    for (let book of books) {
        ret.push(book.title);
    }
    return ret;
};

// Do not edit below this line
module.exports = getTheTitles;
