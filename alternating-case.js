/* Kata Link */
/* https://www.codewars.com/kata/56efc695740d30f963000557 */

String.prototype.toAlternatingCase = function () {
    /* const stringArr = this.split("");
    const res = [];

    stringArr.map((char) => {
        if (char.charCodeAt() < 65) {
            res.push(char);
        } else if (char.charCodeAt() > 96) {
            res.push(String.fromCharCode(char.charCodeAt() - 32));
        } else {
            res.push(String.fromCharCode(char.charCodeAt() + 32));
        }
    });

    return res.join(""); */

    return this.split("")
        .map((char) => (char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()))
        .join("");
};

const result = "aBCSss".toAlternatingCase();

console.log(result);
