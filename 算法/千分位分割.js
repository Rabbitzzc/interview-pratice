/**
 * 数字千分位加逗号   比如:输入10000    输出 10,000
 */

const splitThousands = num => {
    if(typeof num !== 'number') return

    if(num < 1000) return num

    let str = (num + '').split('').reverse()
    let arr = []
    for(let i=0; i<str.length; i++) {
        arr.push(str[i])
        if(i%3===2) {
            arr.push(',')
        }
    }
    return arr.reverse().join('')
}

console.log(splitThousands(123))
console.log(splitThousands(1234))
console.log(splitThousands(12345))
console.log(splitThousands(123456))
console.log(splitThousands(1234567))
console.log(splitThousands(12345678))
console.log(splitThousands(123456789))
console.log(splitThousands(1234567890))