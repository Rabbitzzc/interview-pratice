// 用集合即可
var lengthOfLongestSubstring = function (s) {
    const len = s.length
    if (len <= 1) return len

    const hash = new Map()
    let res = 0
    let start = 0
    let end = 0

    while (end < len) {
        if (hash.has(s[end])) {
            res = Math.max(res, end - start)
            end++
            start++
        } else {
            hash.set(s[end++], 1)
        }
    }
    console.log(start, end, res)
    return Math.max(res, end - start)
};

s = "abcabcbb"
s = "bbbbb"
s = "pwwkew"
// s = ""
// s = "12345"
// s = "dvdf"
console.log(lengthOfLongestSubstring(s))