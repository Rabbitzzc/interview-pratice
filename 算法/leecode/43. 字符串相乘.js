// num1[i] 和 num2[j] 的乘积对应的就是 res[i+j] 和 res[i+j+1] 这两个位置。
var multiply = function (num1, num2) {
    let len1 = num1.length
    let len2 = num2.length

    const res = Array(len1 + len2).fill(0)

    for (let i = len1 - 1; i >= 0; i--) {
        for (let j = len2 - 1; j >= 0; j--) {
            const temp = Number(num1[i]) * Number(num2[j])
            const p1 = i + j
            const p2 = i + j + 1
            const sum = temp + res[p2]

            res[p2] = sum % 10
            res[p1] += (sum - res[p2]) / 10
        }
    }

    // return Number(res.join(''))
    if(res[0] === 0) {
        let flag = 0
        for(let i=0; i<res.length; i++) {
            if(res[i] !== 0) {
                flag = i
                break
            }
        }
        if(flag === 0) return '0'
        return res.slice(flag).join('')
    } else {
        return res.join('')
    }
};

console.log(multiply('99', '88')) // 8 7 1 2

console.log(multiply('9999', '8888'))
console.log(multiply('0000', '0000'))
console.log(multiply('10', '8'))