/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    if(n === 0) return 0
    if(n <= 2) return 1

    // let tmp  = Math.floor(n/2)
    let i = 1
    while(i * (i+1) <= 2*n) {
        ++i
    }
    return --i
};

console.log(arrangeCoins(5)) // 2
console.log(arrangeCoins(8)) // 3
console.log(arrangeCoins(1)) // 1
console.log(arrangeCoins(0)) // 0
console.log(arrangeCoins(6)) // 3
console.log(arrangeCoins(2)) // 1
console.log(arrangeCoins(16)) // 5