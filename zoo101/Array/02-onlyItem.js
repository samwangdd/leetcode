function onlyItem(nums) {
    const obj = {};
    for (const n of nums) {
        if (obj[n]) {
            obj[n]++
        } else {
            obj[n] = 1
        }
    }
    const res = []
    for (const [k, v] of Object.entries(obj)) {
        if (v === 1) {
            return res.push(k)
        }
    }

    return res;
}