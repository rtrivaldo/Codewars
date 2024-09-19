/* Kata Link */
/* https://www.codewars.com/kata/5264d2b162488dc400000001 */

const spinWords = (string) =>
    string
        .split(" ")
        .map((str) => (str.length >= 5 ? str.split("").reverse().join("") : str))
        .join(" ");

console.log(spinWords("Hey fellow warriors"));
