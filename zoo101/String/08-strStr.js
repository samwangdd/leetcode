function strStr(target, str) {
    const tarLen = target.length;
    const strLen = str.length;
    if (!str) return 0;
    if (tarLen < strLen) {
        return -1
    } else if (tarLen === strLen) {
        return target === str ? 0 : -1
    } else {
        for (let i = 0; i <= tarLen - strLen; i++) {
            const element = target[i];
            if (element !== str[0]) {
                continue
            }
            if (target.substring(i, i + strLen) === str) {
                return i;
            }
        }
    }

    return -1
}