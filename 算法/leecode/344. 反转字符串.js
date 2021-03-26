/**
 * 双指针，空间复杂度降低
 */

var reverseString = function (s) {
    const {length} = s;
    if(length<=1) return s

    let left = 0,right =length-1
    while(left<right) [s[left++],s[right--]] = [s[right],s[left]]
    return s
};

a = ["h","e","l","l","o"]
console.log(reverseString(a))