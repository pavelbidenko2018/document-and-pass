/**
 * functions returns a summury of numbers between 2 arguments including them
 * @param {number} num1 // first arg
 * @param {number} num2 // second arg
 * @returns {number} res
 * 
 * @example
 * 
 * const res = sumAll(1,4);
 * console.log(res); // returns 10;
 */
const sumAll = (num1, num2) => {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') return 'ERROR';
    if (num1 < 0 || num2 < 0) return 'ERROR';

    let res = 0;
    for (let i = Math.min(num1, num2); i <= Math.max(num1, num2); i++) {
        res += i;
    }
    return res;
}

module.exports = sumAll