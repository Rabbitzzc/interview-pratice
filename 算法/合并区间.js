/**
 * 首先对数组进行排序，比较前后数组的大小，如果>=，则合并
 */

const merge = arr => {
    if(!Array.isArray(arr)) return []
    if(arr.length <= 1) return arr

    arr.sort((a, b) => a[0] - b[0])

    let result = []
    for(let i=0; i<arr.length-1; ++i) {
        let a = arr[i],b=arr[i+1]

        if(b[0] >= a[0] && b[0] <= a[1]) {
            arr.splice(i,2, [a[0],Math.max(b[1],a[1])])
            --i
        }
    }
    return arr
}


let a =  [[1,3],[2,6],[8,10],[15,18]]
let b =  [[1,4],[4,5]]
console.log(merge(a))
console.log(merge(b))