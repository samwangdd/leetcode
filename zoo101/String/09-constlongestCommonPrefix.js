const findPrefix = (a, b) => {
    let i = 0;
    while (i < a.length && i < b.length && a.charAt(i) === b.charAt(i)) {
        i++
    }
    return i > 0 ? a.substring(0, i) : '';
}

function constlongestCommonPrefix(strArr) {
    if (strArr.length > 0) {
        let prefix = strArr[0]
        for (let i = 1; i < strArr.length; i++) {
            prefix = findPrefix(prefix, strArr[i])

        }
        return prefix
    }

    return ''
}