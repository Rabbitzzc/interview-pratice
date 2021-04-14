// 判断两个变量是否相等

const deepEqualObject = (a, b) => {
    // https://github.com/mqyqingfeng/Blog/issues/41
}
const deepEqual = (a, b) => {
    // === 结果为 true 的区别出 +0 和 -0 赋值
    if (a === b) return a !== 0 || 1 / a === 1 / b;

    // typeof null 的结果为 object ，这里做判断，是为了让有 null 的情况尽早退出函数
    if (a == null || b == null) return false;

    // 判断 NaN
    if (a !== a) return b !== b;

    // 判断参数 a 类型，如果是基本类型，在这里可以直接返回 false
    var type = typeof a;
    if (type !== 'function' && type !== 'object' && typeof b != 'object') return false;

    // 如果两个对象
    return deepEqualObject(a, b);

}