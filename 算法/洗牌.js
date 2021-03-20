/**
 * 思路：从数组随机位置，然后拿出来放到新数组，持续，知道数组为空
 */

const shuffle = arr => {
    let newArr = []
    while (arr.length) {
        const random = Math.floor(Math.random(0,arr.length))
        newArr.push(arr.splice(random,1))
    }
    return newArr
}