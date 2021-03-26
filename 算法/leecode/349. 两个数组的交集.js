var intersection = function(nums1, nums2) {
    // 通过 es6 set
    let hash1 = new Set(nums1)
    let hash2 = new Set(nums2)
    
    let result = new Set()
    for(let o of hash1) {
        if(hash2.has(o)) result.add(o)
    }
    return [...result]
};

a = [1,2,2,1]
b = [2,2]

console.log(intersection(a,b))
console.log(intersection(b,a))