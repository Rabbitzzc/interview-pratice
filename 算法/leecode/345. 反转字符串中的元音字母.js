/***
 * 双指针，左右都为 a e i o u
 */

// 注意大写，我就是这个没提交成功
const isAEIOU = v => ['a', 'e', 'i', 'o', 'u','A','E','I','O','U'].indexOf(v) > -1
var reverseVowels = function (s) {
    if (s.length <= 0) return s

    s = s.split('')
    let left = 0
    let right = s.length - 1
    while (left < right) {
        const l = isAEIOU(s[left])
        const r = isAEIOU(s[right])
        
        if (l && r) {
            [s[left++],s[right--]] = [s[right],s[left]]
        }
        if (!l) left++
        if (!r) right--
    }
    return s.join('')
};

let s = "leetcode"

console.log(reverseVowels(s))