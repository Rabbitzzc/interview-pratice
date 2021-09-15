const Koa = require('koa')
const app = new Koa()

app.use(async (ctx) => {
  ctx.body = ctx.query.userName
})

app.listen(3000, () => {
  console.log('启动成功')
})

// 在页面启动以后，直接会执行某个脚本  - http://127.0.0.1:3000/?userName=%3Cscript%3Ealert(%22%E5%8F%8D%E5%B0%84%E5%9E%8B%20XSS%20%E6%94%BB%E5%87%BB%22)%3C/script%3E
