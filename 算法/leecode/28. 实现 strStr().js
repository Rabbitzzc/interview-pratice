/**
 * 其实就是实现字符串匹配, js 的 indexOf 了
 * 常用方法是 KMP - 参考阮一峰答案
 * 也可以使用正则匹配
*/
var strStr = function (haystack, needle) {
    const reg = new RegExp(needle)
    const result = haystack.match(reg)
    if(!result) return -1
    return result.index || 0
};