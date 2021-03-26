var merge = function (nums1, m, nums2, n) {
    nums1.splice(m)
    nums2.splice(n)

    let s1 = 0
    let s2 = 0
    while (s2 < nums2.length) {
        if (nums1[s1] <= nums2[s2]) s1++
        else {
            nums1.splice(s1,0,nums2[s2])
            s1++
            s2++
        }
    }
    return nums1
};

a = [1, 2, 3, 0, 0, 0]
b = [2, 5, 6]
console.log(merge(a, 3, b, 3))

a = [1]
b = []
console.log(merge(a, 2, b, 1))

a = [1, 2, 4, 5, 6, 0]
b = [3]
console.log(merge(a, 5, b, 1))