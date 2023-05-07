function countAndSay(n) {
    let res = '1';
    for (let i = 1; i < n; i++) {
        res = res.replace(/(\d)\1*/g, item => {
            return `${item.length}${item[0]}`
        })
    }

    return res
}
