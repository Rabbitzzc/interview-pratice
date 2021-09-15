const all = (promises) => {
  return new Promise((resolve, reject) => {
    let count = 0
    let length = promises.length

    const results = Array.from({ length })

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((res) => {
          results[index] = res
          if (++count === length) resolve(results)
        })
        .catch((err) => reject(err))
    })
  })
}
