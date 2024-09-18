/* Kata Link */
/* https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9 */

const findShort = (s) => Math.min(...s.split(" ").map((char) => char.length));

console.log(findShort("asd bass as"));
