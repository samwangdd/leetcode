const findPrefix = (a, b) => {
    let i = 0;
    while (i < a.length && i < b.length && a.charAt(i) === b.charAt(i)) {
        i++
    }
    return i > 0 ? a.substring(0, i) : '';
}

function longestCommonPrefix(strs) {
    if (strs.length === 0) return '';

    let i = 0;
    let flag = true;

    while (flag) {
        if (strs[0].length > i) {
            const char = strs[0].charAt(i);
            for (let j = 1; j < strs[0].length; j++) {
                if (strs[j].length < i || strs[j].charAt(i) !== char) {
                    flag = false;
                    break;
                }

            }
        } else {
            flag = false
        }
        i++;
    }

    return strs[0].substring(0, i - 1)
}