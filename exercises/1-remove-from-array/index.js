/**
 * this function removes one or several arguments from the array
 * @param {array} arr
 * @param {any} itemsToRemove
 * @return {array} res
 * 
 * @example
 * const res = removeFromArray([1,2,3],1)
 * console.log(res); //[2,3]
 */

const removeFromArray = (arr, ...itemsToRemove) => {
    if (!Array.isArray(arr)) {
        throw new TypeError('parameter must be an array');
    }
    const res = [];
    for (const value of arr) {
        if (!itemsToRemove.includes(value))
            res.push(value);
    }
    return res;

};

module.exports = removeFromArray