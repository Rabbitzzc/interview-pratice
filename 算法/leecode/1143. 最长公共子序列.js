// var longestCommonSubsequence = function (text1, text2) {
//     /**
//      * 明确状态：字符串
//      * 明确选择：字符
//      * dp 定义 dp[i][j] 表示最长子序列
//      * 明确 base： dp[i][j] = 0
//      */
//     let len1 = text1.length;
//     let len2 = text2.length;

//     const dp = []
//     for (let i = 0; i <= len1; i++) {
//         dp[i] = []
//         for (let j = 0; j <= len2; j++) {
//             dp[i][j] = 0 // base
//         }
//     }

//     for(let i = 1; i<= len1; i++) {
//         for(let j = 1; j <= len2; j++) {
//             if(text1[i-1] === text2[j-1]) {
//                 dp[i][j] = dp[i-1][j-1] + 1 
//             } else {
//                 dp[i][j] = 0
//             }
//         }
//     }

//     console.log(dp)
//     let res = -Infinity
//     for (let i = 0; i <= len1; i++) {
//         for (let j = 0; j <= len2; j++) {
//             if(dp[i][j] > res) res = dp[i][j]
//         }
//     }
//     return res
// };


// 上面是最长子串，下面是最长公共子序列
var longestCommonSubsequence = function (text1, text2) {
    
    let len1 = text1.length;
    let len2 = text2.length;

    const dp = []
    for (let i = 0; i <= len1; i++) {
        dp[i] = []
        for (let j = 0; j <= len2; j++) {
            dp[i][j] = 0 // base
        }
    }

    for(let i = 1; i<= len1; i++) {
        for(let j = 1; j <= len2; j++) {
            if(text1[i-1] === text2[j-1]) {
                dp[i][j] = dp[i-1][j-1] + 1 
            } else {
                dp[i][j] = Math.max(dp[i][j-1], dp[i-1][j])
            }
        }
    }

    console.log(dp)
    let res = -Infinity
    for (let i = 0; i <= len1; i++) {
        for (let j = 0; j <= len2; j++) {
            if(dp[i][j] > res) res = dp[i][j]
        }
    }
    return res
};

text1 = "abcde", text2 = "ace" 
console.log(longestCommonSubsequence(text1, text2))

