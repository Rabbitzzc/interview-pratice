/**
 * 思路：new Set()
 */

const distinct = arr => [...new Set(arr)]


console.log(distinct([1,2,7,3,5,1,2]))