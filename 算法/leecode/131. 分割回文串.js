const isPalindrome = function (s) {
    if (s.length <= 1) return true;

    s = s.toLowerCase().split('').filter(v => /^[A-Za-z0-9]+$/.test(v))
    let left = 0;
    let right = s.length - 1;
    while (left <= right) {
        if (s[left] !== s[right]) {
            return false;
        } else {
            left++
            right--
        }
    }
    return true;
};

const backtracking = (s, length, temp, result) => {
    // 终止条件，当等于长度，则终止条件
    if (length === s.length) {
        result.push([...temp])
    }

    // 遍历 从i开始一直到结尾，也就是是子节点的孩子个数
    for (let i = length; i < s.length; i++) {
        const str = s.substring(length, i + 1)
        if (isPalindrome(str)) {
            temp.push(str)
            backtracking(s, i + 1, temp, result)
            temp.pop()
        }
    }
}

var partition = function (s) {
    if (s.length === 0) return []
    if (s.length <= 1) return [[s]]

    let result = []

    backtracking(s, 0, [], result)
    return result
};

s = "a"

console.log(partition(s))