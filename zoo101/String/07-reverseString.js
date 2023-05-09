function reverseString(arr) {
    const time = Math.floor(arr.length / 2)
    for (let i = 0; i < time; i++) {
        [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]]
    }
    
    return arr;
}