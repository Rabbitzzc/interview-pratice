/**
 * 原理
 */

const addStrings = (num1, num2) => {
    let len1 = num1.length;
    let len2 = num2.length;

    let len = Math.max(len1, len2);

    // 填充 0
    num1 = num1.padStart(len, '0');
    num2 = num2.padStart(len, '0');

    let res = ''
    let one = 0 // 进位

    for (let i = len - 1; i >= 0; i--) {
        let s = +num1[i] + +num2[i] + one
        if(s >= 10) {
            one = 1
        } else {
            one = 0
        }
        res = s % 10 + res
    }

    if(one) {
        res = '1' + res
    }
    return res
};

const num1 = '87634341980'
const num2 = '89042793853'

addStrings(num1, num2)