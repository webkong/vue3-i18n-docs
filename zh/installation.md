# 安装

## 兼容性

- Vue.js `3.0.0`+

## 直接下载 / CDN

<https://unpkg.com/vue3-i18n>

[unpkg.com](https://unpkg.com) 提供了基于 NPM 的 CDN 链接。上面的链接会一直指向在 NPM 发布的最新版本。你也可以通过 <https://unpkg.com/vue3-i18n@1.1.3/dist/vue3-i18n.js> 这样的 URL 指定版本号或者 tag。

```html
<script src="https://unpkg.com/vue@next"></script>
<script src="https://unpkg.com/vue3-i18n/dist/vue3-i18n.js"></script>
```

## NPM

```sh
npm install vue3-i18n
```

## Yarn

```sh
yarn add vue3-i18n
```

如果在一个模块系统中使用它，你必须通过 `Vue.use()` 明确地安装 `vue3-i18n`：

```javascript
import Vue from "vue";
import VueI18n from "vue3-i18n";

Vue.use(VueI18n);
```
