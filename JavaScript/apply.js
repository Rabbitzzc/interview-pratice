Function.prototype.apply = function(ctx) {
    ctx = ctx || (typeof window === 'undefined' ? {} : window)

    ctx.fn = this

    let args = []
    for(let i = 1; i < arguments.length; i++) args.push(arguments[i])

    const result = ctx.fn(args)

    delete ctx.fn
    return result
}