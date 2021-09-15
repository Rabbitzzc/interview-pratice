/**
 * 将平面看成坐标系，然后循环进行比较
 */

const findNumberIn2DArray = (target, arr) => {
    let x = 0
    let y = arr.length - 1
    if(arr[y] === undefined || arr[y][x] === undefined) return  false
    const x_length = arr[0].length
    
    while (x < x_length && y >= 0) {
        let temp = arr[y][x]
        if (temp === target) return true
        else if (temp > target) {
            y--
        } else {
            x++
        }
    }

    return false
}

const arr = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]]
const target = 5

console.log(findNumberIn2DArray(target, arr))

/**
 * 递增序列有一个非常牛逼的东西，就死二分查找
 */