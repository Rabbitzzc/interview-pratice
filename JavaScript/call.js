// call 绑定
/**
 * 绑定某个对象，并传递参数执行
 * 将函数设为对象的属性  执行该函数  删除该函数
 */

Function.prototype.call3 = function (ctx) {

    // 在浏览器中需要指定为 window，在 node 环境中，则为 空对象
    ctx = ctx || (typeof window === 'undefined' ? {} : window)
    ctx.fn = this

    let args = []
    for (let i = 1; i < arguments.length; i++) {
        args.push(arguments[i])
    }

    const result = ctx.fn(...args)
    delete ctx.fn
    return result
}