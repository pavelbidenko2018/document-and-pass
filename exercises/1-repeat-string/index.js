/** function repeats input string n times
 * @param {string} input // input string;
 * @param {number} num // number of repeats
 * @return {string} res 
 * 
 * @example
 * const output = repeatString('hey',3);
 * console.log(output) // 'heyheyhey
 */

const repeatString = (input, num) => {
    if (num < 0) return 'ERROR';

    let res = '';
    for (let i = 1; i <= num; i++) {
        res += input;
    }
    return res;
}


module.exports = repeatString