// 创建一个对象
// 返回一个对象，对象的原型指向 o

const create = function (o) {
    const f = function () {}
    f.prototype = o
    return new f()
}