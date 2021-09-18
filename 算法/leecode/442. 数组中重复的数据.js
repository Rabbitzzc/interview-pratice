/**
 * 利用 O(n) 的时间，不需要另外空间，肯定就是通过原地遍历解决
 * 题目的特点就是数组的值是小于数组的长度的，可以通过数组的数在下标位置，从而判断是否存在重复
 */

const findDuplicates = nums => {
    const res = []
    let i = 0

    while (i < nums.length) {
        const a = nums[i]
        let b = nums[a-1]
        if(a !== b && (a!==0 || b !== 0)) {
            nums[a-1] = a
            nums[i] = b
        } else {
            if(a-1 !== i) {
                nums[i] && res.push(nums[i])
                nums[i] = 0
            }
            i++
        }
        console.log(arr,i,res)
    }

    return res
}
// const arr = [4,3,2,7,8,2,3,1]
// const arr = [1,1,2]
const arr = [1,2,3,2,1]
console.log(findDuplicates(arr))