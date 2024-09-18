/* Kata Link */
/* https://www.codewars.com/kata/5390bac347d09b7da40006f6 */

String.prototype.toJadenCase = function () {
    return this.split(" ")
        .map((str) => str.charAt().toUpperCase() + str.slice(1))
        .join(" ");
};

console.log("How can mirrors be real if our eyes aren't real".toJadenCase());
