/**
 * 还是二分法，通过获取中间的数，判断平方与 num 的大小
 */
var isPerfectSquare = function (num) {
    if(num <= 0) return false;

    // 1 返回 true 1 ^ 2 = 1
    if(num === 1) return true;

    let start = 1
    let end = num -1

    while(start <= end) {
        let mid = Math.floor((start + end)/2)
        const res = mid*mid

        if(res === num) return true
        else if(res > num) end = mid -1
        else start = mid + 1
    }
    return false
};

console.log(isPerfectSquare(16))
console.log(isPerfectSquare(8))
console.log(isPerfectSquare(4))
console.log(isPerfectSquare(14))
console.log(isPerfectSquare(25))
console.log(isPerfectSquare(2))