/**
var obj = {a:{b:{c:1}}};
find(obj,'a.b.c') //1
find(obj,'a.d.c') //undefined

思路：将字符串 split 以后，进行遍历，如果不是 undefined，则直接继续遍历，否则返回 undefined
 */

const find = (obj, str) => {
    let prop = str.split('.')
    let temp = obj

    for(let i = 0; i < prop.length; i++) {
        if(temp === undefined) return undefined
        temp = temp[prop[i]]
    }
    return temp
}

const obj = {a:{b:{c:1}}}

console.log(find(obj,'a.b.c'))
console.log(find(obj,'a.b.d'))
console.log(find(obj,'a.d.c'))
console.log(find(obj,'a'))
console.log(find(obj,'a.b'))
console.log(find(obj,'b'))