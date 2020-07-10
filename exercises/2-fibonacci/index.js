/**
 * function finds a Fibonacci sequence value from a given index
 * @param {number} limit // index of Fibonacci sequence
 * @returns {number} // value with index 'limit'
 * 
 * @example
 * const res = fibonacci(4);
 * console.log(res) // 3 
 * 
 */
const fibonacci = (limit) => {

    if (limit < 0) return 'OOPS';

    const array = [];
    array.length = limit;
    array[0] = 1;
    array[1] = 1;

    for (let i = 2; i < array.length; i++) {
        array[i] = array[i - 1] + array[i - 2];
    }

    return array[limit - 1];
}


module.exports = fibonacci