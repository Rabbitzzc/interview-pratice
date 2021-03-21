/**
 * 要求：包含 on off emit once 方法
 * 思路：如代码
 */
class Emitter {
    constructor() {
        this.all = new Map()
    }

    // 注册
    on(type,handler) {
        const handlers = this.all.get(type)
        handlers ? handlers.push(handler) : this.all.set(type, [handler])
    }

    // 销毁
    off(type,handler) {
        // 全部删除
        if(!handler) this.all.delete(type)


        const handlers = this.all.get(type)

        // 如果 handler 存在，则删除，否则不删除
        if(handlers) handlers.splice(handlers.indexOf(handler) >>> 0, 1)
    }
    
    // 触发
    emit(type, event) {
        // 针对于所有实践处理
        (this.all.get(type) || []).slice().forEach(handler => {handler(event)});
        
        // 如果监听了全局所有事件，则监听 *
        (this.all.get('*') || []).slice().forEach(handler => {handler(type,event)});
    }

    // 单次触发
    once(type, handler) {
        // 替换 handler
        const temp_handler = () => {
            handler.apply(this, arguments)

            // 单次触发，说明直接移除所有的 handler
            this.off(type)
        }
        
        this.on(type, temp_handler)
    }

}

const emitter = new Emitter()

emitter.on('foo', e => console.log('foo', e) )

emitter.on('*', (type, e) => console.log(type, e) )

emitter.emit('foo', { a: 'b' })

// map 可以清除
emitter.all.clear()

function onFoo() {
    console.log('foo')
}
emitter.on('foo', onFoo) 
emitter.emit('foo', onFoo) 
emitter.off('foo', onFoo)


function onceTest() {
    console.log('只执行一次')
}

emitter.once('once', onceTest)

emitter.emit('once')
emitter.emit('once')
emitter.emit('once')