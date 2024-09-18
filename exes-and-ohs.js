/* Kata Link */
/* https://www.codewars.com/kata/5390bac347d09b7da40006f6 */

function XO(str) {
    /* let xCount = 0,
        oCount = 0;

    str.split("").forEach((char) => {
        if (char == "x" || char == "X") xCount++;
        if (char == "o" || char == "O") oCount++;
    });

    return xCount === oCount; */

    /* let xCount = str.match(/x/gi);
    let oCount = str.match(/o/gi);

    return (xCount && xCount.length) === (oCount && oCount.length); */

    str = str.toLowerCase().split("");

    return str.filter((x) => x === "x").length === str.filter((o) => o === "o").length;
}

console.log(XO("xo"));
