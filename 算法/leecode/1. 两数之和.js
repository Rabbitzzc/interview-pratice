/**
 * 不能排序，就需要记录数组下标啦。利用 hash 表，存储数组下标，寻找数据更简单，返回数据下标即可
 */
var twoSum = function (nums, target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const res = target - nums[i];
        // 是否存储数据，找到了对应的数据，且不为当前
        if (map.has(res)) {
            return [map.get(res), i]
        }
        // 否则，存储当前 hash
        map.set(nums[i], i)
    }
};
nums = [2,7,11,15], target = 9

console.log(twoSum(nums,target))