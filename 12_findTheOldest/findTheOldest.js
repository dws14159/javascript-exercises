const findTheOldest = function(people) {
    let oldest=people[0];
    let oldestAge=(people[0].yearOfDeath ?? 2025) - people[0].yearOfBirth;

    for (let i=1; i<people.length; i++) {
        let age=(people[i].yearOfDeath ?? 2025) - people[i].yearOfBirth;
        if (age > oldestAge) {
            oldestAge = age;
            oldest = people[i];
        }
    }

    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
