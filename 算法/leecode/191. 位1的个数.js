// 位运算，x&(x-1) 将最后的结果变为 0
var hammingWeight = function (n) {
    let count = 0;
    while (n) {
        n &= (n - 1)
        ++count
    }
    return count
};