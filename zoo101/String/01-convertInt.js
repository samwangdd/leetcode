function convertInt(x) {
    if (typeof x !== 'number') {
        return
    }

    let int = Math.abs(x);
    let num = 0;
    // 取模10
    while (int !== 0) {
        num = (int % 10) + (num * 10); // 从 num 最后一位取值，拼成新的数
        int = Math.floor(int / 10); // 去掉被消费的部分
    }

    if (num > Math.pow(2, 31)) return 0;
    const isM = x > 0;

    return isM ? num : 0 - num;
}