// 最大子序列和
/**
 * O(n) 思路：对于前面的子序列，如果>0，则可以需要，如果<0，则需要丢弃
 */
var maxSubArray = function (nums) {
    let res = nums[0];
    let sum = 0;
    for (let num of nums) {
        if (sum > 0)
            sum += num;
        else
            sum = num;
        res = Math.max(res, sum);
    }
    return res;
};

arr = [4, 3, -8, 9]

console.log(maxSubArray(arr))


// 分而治之方法
// 先分解，计算，再合并