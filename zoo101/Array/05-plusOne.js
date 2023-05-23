/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    let num = 0;
    const len = digits.length;
    for (let i = 0; i < len; i++) {
        const v = digits[i];
        num = BigInt(num) * 10n + BigInt(v);
        if (i === len - 1) {
            num = BigInt(num) + 1n;
        }
    }

    return num.toString().split("");
};