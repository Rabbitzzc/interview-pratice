/**
 * promise.race 可以实现竞争，比如如下代码
 */

const task = ()=>{

    const time1 = new Promise((resolve, reject)=>{
        setTimeout(()=>reject('请求超时-time1'),1000)
    })
    const time2 = new Promise((resolve, reject)=>{
        setTimeout(()=>reject('请求超时-time2'),2000)
    })

    return Promise.race([time1,time2])
}

task().then(res=>[
    console.log(res)
]).catch(err=>{
    console.log(err)
})

/**
 * 基于上面的代码思路，可以实现一个函数，传递一个 fetch，并传递超时时间
 * 在时间完成以后自动走 setTimeout
 */

const timeFetch = (fetch, time=10000)=>{
    const time1 = new Promise((resolve, reject)=>{
        setTimeout(()=>reject('请求超时-time1'),time)
    })
    return Promise.race([time1, fetch])
}

timeFetch(fetch('https://www.baidu.com'), 3000).then((res)=>res.json()).then((data)=>{
    console.log(data)
}).catch(err=>{
    console.log('err--', err)
})

/**
 * 超时搞定了，接下来就是自动重连呢
 * fetch 默认不会重新连接，所以需要手动添加，利用 for 循环即可
 */
const againFetch = async (fetch, number=3)=>{
    let count = 0

    while (count < number) {
        try {
            return await fetch()
        } catch (error) {
            ++count
            console.log(error)
        }
    }

    return Promise.reject(`尝试${number}次fetch失败`)
}