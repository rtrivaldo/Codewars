/* Kata Link */
/* https://www.codewars.com/kata/5667e8f4e3f572a8f2000039 */

const accum = (s) =>
    s
        .split("")
        .map((str, index) => str.toUpperCase() + str.toLowerCase().repeat(index))
        .join("-");

console.log(accum("ZpglnRxqenU"));
