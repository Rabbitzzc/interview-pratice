/**
 * 判断是否为回文字符串
 * 思路：将字符串旋转以后判断是否相等即可
 */

const palindrome = str => {
    if(str.length <= 1) return str
    return str === str.split('').reverse().join('')
}

console.log(palindrome('1234322'))
console.log(palindrome('1234321'))