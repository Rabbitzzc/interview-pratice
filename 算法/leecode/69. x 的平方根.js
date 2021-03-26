/**
 * 手动实现 - 二分法
 */
var mySqrt = function (x) {
    if (x === 0) return 0;
    if (x < 4) return 1;

    let left = 2
    let right = x >> 1

    while (left <= right) {
        let mid = ((right - left) >> 1) + left
        // 用除法代替乘法，更加合理
        if (mid > x / mid) {
            right = mid - 1
        } else if (mid < x / mid) {
            left = mid + 1
        } else {
            return mid
        }
    }
    // 最后肯定能确定一个位置
    return right > x / right ? left : right
};
console.log(mySqrt(8))
console.log(mySqrt(64))
console.log(mySqrt(63))
console.log(mySqrt(65))