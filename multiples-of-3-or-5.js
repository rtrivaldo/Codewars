/* Kata Link */
/* https://www.codewars.com/kata/514b92a657cdc65150000006 */

function solution(number) {
    /* if (number <= 0) return 0;

    let num = 0;

    for (let i = 1; i < number; i++) {
        if (i % 3 == 0 || i % 5 == 0) num += i;
    }

    return num; */

    return number < 0 ? 0 : [...Array(number).keys()].filter((n) => n % 3 == 0 || n % 5 == 0).reduce((n, i) => n + i, 0);
}

console.log(solution(10));
