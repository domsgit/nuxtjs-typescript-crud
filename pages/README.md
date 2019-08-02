# PAGES

This directory contains your Application Views and Routes.
The framework reads all the `*.vue` files inside this directory and creates the router of your application.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/guide/routing).

# [路由](https://zh.nuxtjs.org/guide/routing)

# [布局](https://zh.nuxtjs.org/guide/views/#%E5%B8%83%E5%B1%80)

```vue
<template>
  <div class="template-page"></div>
</template>

<script>
export default {
  // prettier-ignore
  async asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
    // called every time before loading the component
    // let { data } = await axios.get()
    /** 
    * // 检查您是否在服务器端
    * if (process.server) {
    *   return { host: req.headers.host }
    * }
    */
    return {}
  },
  fetch() {
    // The fetch method is used to fill the store before rendering the page
  },
  head() {
    // Set Meta Tags for this Page
  },
  layout() {},
  loading() {},
  transition() {},
  scrollToTop: 'false',
  /*
   * https://zh.nuxtjs.org/api/pages-validate/
   */
  validate() {},
  middleware() {}
  //监听参数字符串更改并在更改时执行组件方法 (asyncData, fetch, validate, layout, ...)
  // 类型: Boolean or Array (默认: [])
  //watchQuery: ['page'],
  // and more functionality to discover
}
</script>

<style>
.template-page {
}
</style>
```

| 属性名      | 描述                                                                                                                                                                                                        |
| :---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| asyncData   | 最重要的一个键, 支持 异步数据处理，另外该方法的第一个参数为当前页面组件的 上下文对象。                                                                                                                      |
| fetch       | 与 asyncData 方法类似，用于在渲染页面之前获取数据填充应用的状态树（store）。不同的是 fetch 方法不会设置组件的数据。详情请参考 关于 fetch 方法的文档。                                                       |
| head        | 配置当前页面的 Meta 标签, 详情参考 页面头部配置 API。                                                                                                                                                       |
| layout      | 指定当前页面使用的布局（layouts 根目录下的布局文件）。详情请参考 关于 布局 的文档。                                                                                                                         |
| loading     | 如果设置为 false，则阻止页面自动调用 this.$nuxt.$loading.finish()和 this.$nuxt.$loading.start(),您可以手动控制它,请看例子,仅适用于在 nuxt.config.js 中设置 loading 的情况下。请参考 API 配置 loading 文档。 |
| transition  | 指定页面切换的过渡动效, 详情请参考 页面过渡动效。                                                                                                                                                           |
| scrollToTop | 布尔值，默认: false。 用于判定渲染页面前是否需要将当前页面滚动至顶部。这个配置用于 嵌套路由的应用场景。                                                                                                     |
| validate    | 校验方法用于校验 动态路由的参数。                                                                                                                                                                           |
| middleware  | 指定页面的中间件，中间件会在页面渲染之前被调用， 请参考 路由中间件。                                                                                                                                        |
