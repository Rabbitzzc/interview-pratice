### CSRF 跨站请求伪造示例

> 代码来源：https://mp.weixin.qq.com/s?__biz=MzI0MzU5Nzg0Ng==&mid=2247484020&idx=1&sn=528bcdcf596e09c4c726230cc54525bd&chksm=e96bd50dde1c5c1b1aab035911453d1bf22ed19b32d35a499e3b6271ff89d4c12ff9d31529ee&scene=21#wechat_redirect


#### 解释
跨站请求伪造（Cross Site Request Forgery），是指黑客诱导用户打开黑客的网站，在黑客的网站中，利用用户的登陆状态发起的跨站请求。

#### 示例
示例中有三个文件，分别是：
* client.html
* server.js
* bad.html

首先安装 server.js 中需要的依赖，然后利用 `nodemon` 执行代码：
```js
nodemon server.js
```
`bad.html` 文件利用 `live-server`  执行代码：
```js
live-server bad.html --port=3100
```

浏览器打开`localhost:3200/client.html` 页面即可。

填写必要的登录信息，跳转到详细的支付页面。

随后点击 bad 链接，跳转到 bad 页面，刷新页面可以在控制台中看见自动请求了一些 pay（携带登录 cookie）。


整个上面流程跑通以后，就是一次 CSRF 的跑通。


#### 如何防御 CSRF
既然 CSRF 是非常危险的，特别是涉及到重大利益时，更需要谨慎，保障网站安全非常重要。

防御 CSRF 有着以下几种处理方式：

##### SameSite
SameSite 是HTTP响应头 Set-Cookie 的属性之一。它允许您声明该Cookie是否仅限于第一方或者同一站点上下文。

```js
SameSite: Lax || Strict || None
```
* Lax：Cookies允许与顶级导航一起发送，并将与第三方网站发起的GET请求一起发送 -- 默认值
* Strict： Cookies只会在第一方上下文中发送，不会与第三方网站发起的请求一起发送。
* Node：Cookie将在所有上下文中发送，即允许跨域发送。

可以看到，使用 Lax 或者 Strict 的属性可以防御 CSRF。

##### 验证请求的来源
请求数据，一般会携带 Origin 和 Refer 属性：
* Origin：「跨域-(CORS Allow-Origin 配置)」或者「同域POST」会携带
* Refer：正常都会携带

所以服务器可以通过判断这两个属性，判断请求是否生效。

当然，利用 Proxy 代理，是可以配置请求头的，所以这个安全性没那么高。


#### CSRF Token
这个是最常用的方式了。

最开始浏览器向服务器发起请求时，服务器生成一个CSRF Token【服务器生成的字符串，然后将该字符串种植到返回的页面中(可以通过Cookie)】

浏览器之后再发起请求的时候，需要带上页面中的 CSRF Token（在request中要带上之前获取到的Token，比如 x-csrf-token：xxxx）, 然后服务器会验证该Token是否合法。第三方网站发出去的请求是无法获取到 CSRF Token的值的。

关于 Token - Session - Cookie 的介绍，可以看https://zhuanlan.zhihu.com/p/84401159这篇文章的介绍，讲解的很清晰。
