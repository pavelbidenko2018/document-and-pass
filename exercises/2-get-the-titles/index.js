/**
 * function returns an array of values of certain key from the input array of objects
 * @param {array of Objects} objectArray;
 * @returns {array of Strings} res;
 * 
 * @example
 * 
 * const res = getTheTitles( [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]);
 *  res.forEach((value) => console.log(value)); // Book Book2 
 *
 */
const getTheTitles = (objectArray) => {

    let res = [];

    for (let i = 0; i < objectArray.length; i++) {
        res.push(objectArray[i]['title']);
    }

    return res;

}

getTheTitles([{
        title: 'Book',
        author: 'Name'
    },
    {
        title: 'Book2',
        author: 'Name2'
    }
])


module.exports = getTheTitles;