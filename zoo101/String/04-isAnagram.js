function isAnagram(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const hash = {};

    for (const k of s) {
        hash[k] = hash[k] || 0;
        hash[k] += 1
    }

    for (const v of t) {
        if (!hash[v]) return false
        hash[v] -= 1;
    }

    return true
}
