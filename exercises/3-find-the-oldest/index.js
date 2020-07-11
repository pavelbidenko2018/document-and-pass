/**
 * function finds the name of the oldest person in a given array of objects: {name, yearOfBirth, yearOfDeath}
 *  @param{arrayOfObjects} arrayOfObjects;
 *  @returns{Object} {{name, yearOfBirth, yearOfDeath}
 * 
 *  @example 
 *  const obj = findTheOldest([{
        name: 'Carly',
        yearOfBirth: 1066

    },
    {
        name: 'Ray',
        yearOfBirth: 1962,
        yearOfDeath: 2011
    },
    {
        name: 'Jane',
        yearOfBirth: 1912,
        yearOfDeath: 1941
    },
]);
*  console.log(obj.name) // Carly
* 
* 
*/
let findTheOldest = function(arrayOfObjects) {
    let theOldest = null;


    let maxlive = 0;
    let maxIndex = 0;

    for (let i = 0; i < arrayOfObjects.length; i++) {

        let live = (arrayOfObjects[i].yearOfDeath !== undefined) ? arrayOfObjects[i].yearOfDeath - arrayOfObjects[i].yearOfBirth :
            new Date().getFullYear() - arrayOfObjects[i].yearOfBirth;
        if (live > maxlive) {
            maxlive = live;
            maxIndex = i;
        }

    }

    theOldest = arrayOfObjects[maxIndex];

    return theOldest;

}

findTheOldest([{
        name: 'Carly',
        yearOfBirth: 1066

    },
    {
        name: 'Ray',
        yearOfBirth: 1962,
        yearOfDeath: 2011
    },
    {
        name: 'Jane',
        yearOfBirth: 1912,
        yearOfDeath: 1941
    },
]);

module.exports = findTheOldest;