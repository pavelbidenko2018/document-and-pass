/** function determines if the input year is a leap year
 * @param(number) year
 * @returns (boolean) // leap or not leap
 * 
 * @example
 * const res = leapYears(1996);
 * console.log(res); // true
 * 
 * const res = leapYears(1994);
 * console.log(res); // false
 */
const leapYears = function(year) {

    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

}

module.exports = leapYears