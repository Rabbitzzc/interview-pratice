//  浅拷贝
const shadowCopy = (obj) => {
    if (obj === null || typeof obj !== 'object') return obj

    let res = obj instanceof Array ? [] : {}
    for (let key in obj) {
        res[key] = obj[key]
    }
    return res
}

// 深拷贝
const deepCopy = obj => {
    if (obj === null || typeof obj !== 'object') return obj

    let res = obj instanceof Array ? [] : {}
    for (let key in obj) {
        res[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key]
    }
    return res
}