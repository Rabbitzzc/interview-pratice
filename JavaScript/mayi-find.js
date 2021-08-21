var data = [
  { userId: 8, title: 'title1' },
  { userId: 11, title: 'other' },
  { userId: 15, title: null },
  { userId: 19, title: 'title2' },
]

// 污染了数组的属性
const factory = (arr) => {
  arr.__proto__.where = function (info) {
    const keys = Object.keys(info)
    const res = arr.filter((v) => keys.every((key) => info[key].test(v[key])))
    return factory(res)
  }
  arr.__proto__.orderBy = function (...args) {
    console.log(args)
    args = args.filter((v) => v)
    arr.sort((a, b) => args.some((arg) => a[arg] < b[arg]))
    return arr
  }
  return arr
}
var find = function (origin) {
  return factory(origin)
}

// 查找 data 中，符合条件的数据，并进行排序
var result = find(data)
  .where({
    title: /\d$/,
  })
  .orderBy('userId', 'desc')

console.log(result)
