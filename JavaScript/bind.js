Function.prototype.bind3 = function (ctx) {
    const self = this

    // 首先要获取剩余参数
    const args = [].slice.call(arguments, 1)

    const func1 = function () {
        // 支持柯里化的话，再从该函数中获取所有的参数
        const rest_args = [].slice.call(arguments)

        // 增加一个判断，如果是作为构造函数，则需要对 this 进行判断，指向 func1，则表示 this 指向当前 this
        const first = this instanceof func1 ? this : ctx
        return self.apply(first, [...args, ...rest_args])
    }


    // 同时，func1 需要对构造函数的原型链进行绑定
    func1.prototype = self.prototype
    // 但是这里是一个浅拷贝，所以可以使用中介
    const func2 = function() {}
    func2.prototype = this.prototype
    func1.prototype = new func2()

    // func1.prototype =  Object.create(this.prototype) // 或者另一种方法
    return func1
}
