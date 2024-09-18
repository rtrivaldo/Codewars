/* Kata Link */
/* https://www.codewars.com/kata/554e4a2f232cdd87d9000038 */

function dnaStrand(dna) {
    /* return dna
        .split("")
        .map((char) => {
            switch (char) {
                case "A":
                    return "T";
                case "T":
                    return "A";
                case "G":
                    return "C";
                case "C":
                    return "G";
            }
        })
        .join(""); */

    return dna
        .split("")
        .map((char) => pairs[char])
        .join("");
}

const pairs = {
    A: "T",
    T: "A",
    C: "G",
    G: "C",
};

console.log(dnaStrand("ATTGC"));
