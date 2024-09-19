/* Kata Link */
/* https://www.codewars.com/kata/54da5a58ea159efa38000836 */

function findOdd(A) {
    /* let count = 0;
    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < A.length; j++) {
            if (A[j] === A[i]) count++;

            if (j === A.length - 1 && count % 2 === 1) return A[i];
        }
    } */

    return A.reduce((a, b) => a ^ b);
}

console.log(findOdd([1, 1, 2, 1, 1]));
