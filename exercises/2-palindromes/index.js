/**
 * function veryfies if the input string is a paindrome
 * @param {string} inputString;
 * @returns{boolean}
 * 
 * @example
 * const is_Same = palindromes('A car, a man, a maraca.');
 * console.log(is_Same) // true
 */
const palindromes = (inputString) => {

    const array1 = inputString.toLowerCase().replace(/[^\w]/gi, '').split('');

    const array2 = [];

    array1.map((val) => { array2.unshift(val) });

    const is_same = array1.every((element, index) => { return element === array2[index] });

    return is_same;
}
palindromes('A car, a man, a maraca.');


module.exports = palindromes;