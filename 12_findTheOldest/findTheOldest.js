const findTheOldest = function(array) {
    array.forEach(person => {
        if(!person.yearOfDeath) {
            person.yearOfDeath = new Date().getFullYear();
        }
    });
    const sorted = array.sort((person1, person2) => (person1.yearOfDeath - person1.yearOfBirth) > (person2.yearOfDeath - person2.yearOfBirth) ? -1 : 1);
    return sorted[0];
};

// Do not edit below this line
module.exports = findTheOldest;
