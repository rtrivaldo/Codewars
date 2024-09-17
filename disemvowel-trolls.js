/* Kata Link */
/* https://www.codewars.com/kata/52fba66badcd10859f00097e */

/* const disemvowel = (str) => str.split("a").join("").split("i").join("").split("u").join("").split("e").join("").split("o").join("").split("A").join("").split("I").join("").split("U").join("").split("E").join("").split("O").join(""); */

const disemvowel = (str) => str.replace(/[aiueo]/gi, "");

console.log(disemvowel("This website is for losers LOL!"));
