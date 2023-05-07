function countAndSay(n) {
    console.log('n', n)
    if (n === 1) {
        return '1'
    }
    const preCount = countAndSay(n - 1);
    console.log('a', preCount);
    /**
     * 这个正则表达式将匹配连续出现的数字并将其捕获到一个分组中
     * (\d) 表示捕获数字
     * \1 匹配前面括号内匹配到的内容
     * (\d)\1* 匹配相邻数字、且数字相同的内容
     */
    return preCount.replace(/(\d)\1*/g, item => {
        console.log('b', item)
        return `${item.length}${item[0]}`
    })
}
