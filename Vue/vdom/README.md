#### VDOM

来自阿里小姐姐的一个微信文章：https://mp.weixin.qq.com/s?__biz=MzI0MzU5Nzg0Ng==&mid=2247483889&idx=1&sn=1451b98c35110dfc49e061889def3268&chksm=e96bd688de1c5f9e07e3415fe20bfb927cc016dd49cd8656e611a4e7e0940a6cd5ea3f5c3021&scene=21#wechat_redirect

给出了 Virtual DOM 简单实现。

##### 疑难点

```js
index = {
    value: 0
}
```
DOM 树是通过列表来实现的，所以下标需要存储，如果单纯使用 `value=0`，则表示赋值，而使用对象，则可以实现引用，这样一来，index 就可以递归传递。
