function longestPalindrome(s) {
    if (s == null || s.length < 1) {
        return '';
    }
    let start = 0; let end = 0;

    const expandFromCenter = (s, l, r) => {
        while (l >= 0 && r < s.length && s[l] === s[r]) {
            l--;
            r++;
        }
        // while 上次已经运行，l，r 值已经变化，所以距离减 1
        return r - l - 1;
    }

    for (let i = 0; i < s.length; i++) {
        // 中心的两种选取(奇对称和偶对称)
        const len1 = expandFromCenter(s, i, i)
        const len2 = expandFromCenter(s, i, i + 1)
        const len = Math.max(len1, len2)
        // 如果此位置为中心的回文数长度大于之前的长度，则进行处理
        if (len > end - start) {
            start = i - Math.floor((len - 1) / 2)
            end = i + Math.floor(len / 2)
        }
    }

    return s.substring(start, end + 1)
}