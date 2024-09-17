/* Kata Link */
/* https://www.codewars.com/kata/5a00e05cc374cb34d100000d */

const reverseSeq = (n) => {
    /* let res = [];
    for (let i = n; i > 0; i--) {
        res.push(i);
    }

    return res; */

    return Array(n)
        .fill(0)
        .map((e, i) => n - i);
};

console.log(reverseSeq(6));
