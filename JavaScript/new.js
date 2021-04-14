const New = function() {
    const a = {}
    // 原型绑定
    const A = [].shift.apply(arguments)
    a.__proto__ = A.prototype

    // this 绑定 - 判定 res 是否存在返回值
    const res = A.apply(a, arguments)

    return typeof res === 'object' ? res : a
}