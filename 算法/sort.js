/**
 * 各种排序
 */

/**
 * 冒泡排序
 * 冒泡排序是比较相邻的两个项，如果第一个比第二个大，则交换它们。元素项向上移动至正确的顺序，就好像气泡升至表面一样，冒泡排序因此而得名。
 * 冒泡排序可能是所有排序算法中最简单的，但从运行时间的角度而言，冒泡排序是最差的一个
 * 时间复杂度：两次 for O（n^2）
 * 空间复杂度：O(1)
 */
const bubbleSort = arr => {
    const {
        length
    } = arr
    if (length <= 1) return arr

    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - i - 1; j++) {
            if (arr[j] > arr[j + 1])[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        }
    }
    return arr
}

let arr = [5, 4, 3, 2, 1]
// console.log(bubbleSort(arr))

/**
 * 选择排序
 * 与冒泡排序类似，只不过选择排序不是通过相邻元素交换而将最小值“冒泡”到顶端，而是从数组第一个元素开始，与后面的的元素进行比较，如果后面的元素都比他大，则不需要交换，如果有比其小的，则两个值相互交换。
 * O（n^2） O(1) 稳定
 */

const selectSort = arr => {
    const {
        length
    } = arr
    if (length <= 1) return arr

    for (let i = 0; i < length - 1; i++) {
        let k = i // 监听其是否变化
        for (let j = i; j < length; j++) {
            if (arr[k] > arr[j]) k = j
        }

        if (k !== i)[arr[i], arr[k]] = [arr[k], arr[i]]
    }
    return arr
}
// console.log(selectSort(arr))

/**
 * 插入排序
 * 从数组第二个值开始，依次将后续的数值经过比较与前面排序后的序列比较后插入 -- 无序有序化比较
 * O（n^2） O(1) 稳定
 */

const insertSort = arr => {
    const {
        length
    } = arr
    if (length <= 1) return arr

    for (let i = 0; i < length; i++) {
        let j = i - 1
        let tmp = arr[i]
        // 从后面开始，如果 tmp 小于值，则需要交换位置，确认具体位置
        while (j >= 0 && tmp < arr[j]) {
            arr[j + 1] = arr[j]
            j--
        }
        arr[j + 1] = tmp
    }
    return arr
}
// console.log(insertSort(arr))

/**
 * 归并算法
 * 归并排序是第一个可以实际使用的排序算法，我们之前的三种算法性能不是特别的好，但归并排序性能不错。
 * 在JavaScript中，Array.prototype.sort()方法，ECMAScript并没有定义使用哪种排序算法，而是交给浏览器厂商自己去实现。
 * 对于谷歌V8引擎，其使用了快速排序的变体；在Firefox浏览器中，则是使用了归并排序。
 * 
 * 原理：归并排序是一种分而治之的算法，其思想是将原始数组切分为较小的数组，直到每个小数组只有一个位置，接着将小数组归并成较大的数组，直到最后只有一个排序完毕的大数组。
 */

// 关键：比较左右进行合并
const merge = (left, right) => {
    // 同时遍历，判断大小 left 与 right 都是有序的
    let i = 0
    let j = 0
    const result = []
    while (i < left.length && j < right.length) {
        result.push(left[i] >= right[j] ? right[j++] : left[i++])
    }
    // 将剩余的进行补充
    if (i < left.length) return result.concat(left.slice(i))
    if (j < right.length) return result.concat(right.slice(j))
}

const mergeSort = arr => {
    const {
        length
    } = arr
    if (length <= 1) return arr

    // 归并算法
    let mid = Math.floor(length / 2)
    const left = mergeSort(arr.slice(0, mid))
    const right = mergeSort(arr.slice(mid))
    arr = merge(left, right)
    return arr
}
arr = [8, 7, 6, 5, 4, 3, 2, 1]
console.log(mergeSort(arr))
