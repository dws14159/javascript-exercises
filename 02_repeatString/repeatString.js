const repeatString = function(text, reps) {
    let ret='';

    if (reps < 0)
        return 'ERROR';
    else if (!reps)
        return '';
    else for (let i=0; i<reps; i++)
        ret += text;
    
    return ret;
};

// Do not edit below this line
module.exports = repeatString;
