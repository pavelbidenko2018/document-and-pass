/**
 * function reverses input string
 * @param {string} input
 * @returns {string} res;
 * 
 * @example
 * const res = reverseString('hello');
 * console.log(res); //'olleh'
 */
const reverseString = (input) => {
    let res = '';

    for (let i = input.length - 1; i >= 0; i--) {
        res += input[i];
    }

    return res;
}

module.exports = reverseString