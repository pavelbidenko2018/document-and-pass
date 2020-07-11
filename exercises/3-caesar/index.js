/**
 * function encryptes input string according to a Caesar cipher,
 * moving every character for `num` positions along the alphabet
 * 
 * @param {string} inputString;
 * @param {number} num;
 * 
 * @returns {string} 
 * 
 * @example 
 * const res = caesar("Hello",5);
 * console.log(res) // 'Mjqqt' * 
 * 
 */
const caesar = (inputString, num) => {
    let res = '';

    num = num % 26;
    const alphabet = alp();

    for (let i = 0; i < inputString.length; i++) {
        let index = alphabet.findIndex(e => e === inputString[i].toLowerCase());
        let char = inputString[i].toLowerCase();

        if (char.charCodeAt() >= 32 && char.charCodeAt() <= 64) {
            res += char;
            continue;
        } else {
            newIndex = index + num;

            if (newIndex > 25) newIndex = newIndex - 26;
            else if (newIndex < 0) newIndex = 26 + newIndex;

            res += (inputString[i] === char.toUpperCase()) ? alphabet[newIndex].toUpperCase() : alphabet[newIndex];
        }
    }

    console.log(res);
    return res;

};

function alp() {
    const start = 'a'.charCodeAt(0);
    const end = 'z'.charCodeAt(0);

    const alp = [];

    for (let i = start; i <= end; i++) {
        alp.push(String.fromCharCode(i));
    }
    return alp;
}

alp();

caesar('Mjqqt, Btwqi!', -5);

module.exports = caesar;