/* Kata Link */
/* https://www.codewars.com/kata/56747fd5cb988479af000028 */

function getMiddle(s) {
    /* let str = s.split("");
    let median = s.split("").length / 2;
    return Number.isInteger(median) ? `${str[median - 1]}${str[median]}` : str[Math.floor(median)]; */

    return s.slice((s.length - 1) / 2, s.length / 2 + 1);
}

console.log(getMiddle("tes"));
