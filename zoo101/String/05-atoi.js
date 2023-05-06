/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (str) {
    if (!str) {
        return 0
    }
    const res = str.trim().match(/^(-|\+)?\d+/g)

    const LIMIT = Math.pow(2, 31);
    const sortArr = [0 - LIMIT, Number(res && res[0]), LIMIT - 1].sort((a, b) => a - b)
    console.log(sortArr)
    return res && res[0] ? sortArr[1] : 0
};