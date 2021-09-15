/**
 * 利用 reduce 扁平化
 */

const flat = arr => {
    return arr.reduce((pre, cur) => {
        return pre.concat(Array.isArray(cur) ? flat(cur) : cur);
    }, [])
}