/* Kata Link */
/* https://www.codewars.com/kata/554b4ac871d6813a03000035 */

/* const highAndLow = (numbers) => `${numbers.split(" ").sort((a, b) => a - b)[numbers.split(" ").length - 1]} ${numbers.split(" ").sort((a, b) => a - b)[0]}`; */

function highAndLow(numbers) {
    numbers = numbers.split(" ");
    return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}

console.log(highAndLow("-5 -2 -123 -122 -50"));
