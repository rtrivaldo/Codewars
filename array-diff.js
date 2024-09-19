/* Kata Link */
/* https://www.codewars.com/kata/523f5d21c841566fde000009 */

function arrayDiff(a, b) {
    /* let res = a;

    for (let i = 0; i < b.length; i++) {
        res = res.filter((e) => e != b[i]);
    }

    return res; */

    return a.filter((e) => !b.includes(e));
}

console.log(arrayDiff([1, 2, 3], [1, 2]));
