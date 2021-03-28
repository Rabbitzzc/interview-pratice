// var checkInclusion = function (s1, s2) {

//     let flag = false
//     const all = (s) => {
//         if (s.length === 0) return []
//         if (s.length <= 1) return [s]

//         let queue = s.split('')
//         backtracking(queue)
//     }

//     // 回溯 queue 未进队列，current 已经存的，temp 需要进入的字符
//     const backtracking = (queue, temp = '', current = '') => {
//         console.log(current)
//         if (flag) return
//         current += temp
//         // 现状 加上 temp
//         // 终止条件
//         if (queue.length === 0) {
//             if ((new RegExp(current)).test(s2)) {
//                 flag = true
//             }
//             return
//         }
//         // 当前节点的，集合遍历
//         for (let i = 0; i < queue.length; i++) {
//             //节点处理
//             const item = queue.shift()
//             // 递归
//             backtracking(queue, item, current)
//             // 回溯，撤销 - 撤销不能为 UNshift 操作
//             queue.push(item)
//         }
//     }

//     all(s1)
//     return flag
// };

// 通过全排列，内存消耗过大，需要使用滑动窗口
/**
 * 滑动窗口长度为 s1 长度，然后在滑动 s2 中比较字符串是否与 s1 相等
 */

const equal = (s1, s2) => {
    if (s1.length !== s2.length) return false
    let map1 = new Map();
    let map2 = new Map();
    for (let i = 0; i < s1.length; i++) map1.set(s1[i], (map1.get(s1[i]) || 0) + 1)
    for (let i = 0; i < s2.length; i++) map2.set(s2[i], (map2.get(s2[i]) || 0) + 1)

    for (let [key, value] of map1) {
        if (map2.get(key) !== value) return false
    }
    return true
}
const checkInclusion = (s1, s2) => {
    const {
        length
    } = s1
    let l = 0
    let r = length

    while (r <= s2.length) {
        tmp = s2.slice(l, r)
        if (equal(tmp, s1)) return true
        else {
            // 不相等的情况下，需要移动 r
            l++
            r = l + length
        }
    }
    return false
}
s1 = "ba", s2 = "eidbaooo"
s1 = "a", s2 = "ab"

// s1= "ab", s2 = "eidboaoo"

// s1 = "prosperity"
// s2 = "properties"
console.log(checkInclusion(s1, s2))