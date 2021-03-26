var isPalindrome = function (s) {
    if (s.length <= 1) return true;

    s = s.toLowerCase().split('').filter(v=>/^[A-Za-z0-9]+$/.test(v))
    console.log(s)
    let left = 0;
    let right = s.length - 1;
    while (left <= right) {
        if (s[left] !== s[right]) {
            return false;
        } else {
            left++
            right--
        }
    }
    return true;
};

let a = "A man, a plan, a canal: Panama"
a = "race a car"
console.log(isPalindrome(a))