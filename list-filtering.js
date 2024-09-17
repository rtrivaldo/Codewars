/* Kata Link */
/* https://www.codewars.com/kata/53dbd5315a3c69eed20002dd */

function filter_list(l) {
    /* return l
        .map((e) => {
            return typeof e !== "string" ? e : undefined;
        })
        .filter((e) => e !== undefined); */

    return l.filter((v) => typeof v == "number");
}

console.log(filter_list([-1, 1, 2, "aasf", "1", "123", 123]));
