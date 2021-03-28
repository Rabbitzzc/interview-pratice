/**
 * 也是指针遍历的流程，针对于数组中每一个数据，进行判断，找到关键位置
 */

// 我的思路：利用正则即可 -- 但是会超过限制
var findLongestWord = function (s, dictionary) {
    let regs = dictionary.map(v => {
        let str = '.*'
        for (let i = 0; i < v.length; i++) {
            str = str + v[i] + '.*'
        }
        return new RegExp(str)
    })
    let result = ''
    for (let i = 0; i < regs.length; i++) {
        if (s.match(regs[i])) {
            // 长度相等，取得字典顺序，长度最大，取得最大
            if (dictionary[i].length === result.length && dictionary[i] < result) {
                result = dictionary[i]
            } else if (dictionary[i].length > result.length) {
                result = dictionary[i]
            }
        }
    }
    return result
};

// 双指针办法
var isSatisfy = function (a, b) {
    let i = 0,
        j = 0;
    while (i < a.length && j < b.length) {
        if (a[i] === b[j]) {
            ++i;
            ++j;
        } else {
            ++i
        }
    }
    return j === b.length
}
var findLongestWord = function (s, dictionary) {
    let result = ''
    dictionary.forEach(v => {
        if (isSatisfy(s, v)) {
            // 长度相等，取得字典顺序，长度最大，取得最大
            if ((v.length === result.length && v < result) || (v.length > result.length)) {
                result = v
            }
        }
    })
    return result
}

s = 'abpcplea'
d = ["ale", "apple", "monkey", "plea"]

// isSatisfy(s, d[0])
// isSatisfy(s, d[1])
// isSatisfy(s, d[2])
// isSatisfy(s, d[3])
s = "abpcplea", d = ["a", "b", "c"]

s = 'abce'
d = ["abe", "abc"]

console.log(findLongestWord(s, d))