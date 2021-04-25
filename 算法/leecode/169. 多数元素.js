// 通过 maps 计数肯定可以解决
// 从第一个数开始count=1，遇到相同的就加1，遇到不同的就减1，减到0就重新换个数开始计数，总能找到最多的那个 >n/2 。这方法太聪明了
var majorityElement = function (nums) {
    let count = 0
    let res

    for (let i = 0; i < nums.length; i++) {
        if (count === 0) {
            res = nums[i]
        }
        if (nums[i] === res) {
            count++
        } else {
            count--
        }
    }
    return res
};

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]))
console.log(majorityElement([3, 1, 3]))