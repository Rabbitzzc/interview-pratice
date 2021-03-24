var nextGreatestLetter = function(letters, target) {
    let [start, end] = [0, letters.length-1]

    // 边界条件 - 这里应该是大于等于
    if(target >= letters[end]) return letters[0]

    while (start < end) {
        // 中奖
        const mid = Math.floor(start +(end-start)/2)

        if(letters[mid] <= target) {
            start = mid + 1
        } else {
            end = mid
        }
    }
    return letters[start]
};

let a =  ["c","f","j"]

console.log(nextGreatestLetter(a,'j'))