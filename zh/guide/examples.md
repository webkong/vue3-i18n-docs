# 示例

## CDN 方式使用

[cdn 使用示例](https://github.com/webkong/vue3-i18n/tree/master/examples/cdn)

```html
<div id="app">
  <p>{{name}}</p>
  <p>{{ $t("test") }}</p>
  <!-- array -->
  <p>{{ $t("menu[0]") }}</p>
  <!-- object -->
  <p>{{ $t("object.a") }}</p>
  <!-- parse -->
  <p>{{ $t("parse", { name: "wangsw" }) }}</p>
  <p>{{ $t("parses.a", { name: "wangsw" }) }}</p>
  <p>{{ $t("parses.b", ["wangsw","webkong"]) }}</p>
</div>
<script src="https://unpkg.com/vue@next"></script>
<script src="https://unpkg.com/vue3-i18n/dist/vue3-i18n.js"></script>
<script>
  const messages = {
    en: {
      menu: ["Home"],
      test: "test",
      object: { a: "1233" },
      parse: "welcome to {name}",
      parses: { a: "welcome to {name}", b: "welcome to {0}, name is {1}" },
    },
    zh: {
      menu: ["首页"],
      test: "测试",
      object: { a: "1233" },
      parse: "welcome to {name}",
      parses: { a: "welcome to {name}", b: "welcome to {0}, name is {1}" },
    },
  };
  const i18n = Vue3I18n.createI18n({
    locale: "en",
    messages: messages,
  });

  Vue.createApp({})
    .use(i18n)
    .mount("#app");
</script>
```

页面显示

```js
test
Home
1233
welcome to wangsw
welcome to wangsw
welcome to wangsw, name is webkong
```

## 组件使用

[vue 组件示例](https://github.com/webkong/vue3-i18n/tree/master/examples/vue)

### 引入项目

```javascript
// i18n.js
import { createI18n } from "vue3-i18n";

const messages = {
  en: {
    menu: ["Home"],
    test: "test",
    object: {
      a: "1233",
    },
    parse: "welcome to {name}",
    parses: {
      a: "welcome to {name}",
    },
  },
  zh: {
    menu: ["首页"],
    test: "测试",
    object: {
      a: "1233",
    },
    parse: "welcome to {name}",
    parses: {
      a: "welcome to {name}",
    },
  },
};

const i18n = createI18n({
  locale: "en",
  messages: messages,
});

export default i18n;
```

```javascript
// main.js
import { createApp } from "vue";
import i18n from "./i18n";

const app = createApp(App);

app.use(i18n).mount("#app");
```

### 组件中

```html
<p>{{ $t("test") }}</p>
<!-- array -->
<p>{{ $t("menu[0]") }}</p>
<!-- object -->
<p>{{ $t("object.a") }}</p>
<!-- parse -->
<p>{{ $t("parse", { name: "wangsw" }) }}</p>
<p>{{ $t("parses.a", { name: "wangsw" }) }}</p>
```

```javascript
<script>
import { useI18n } from "vue3-i18n";
export default {
  setup() {
    const i18n = useI18n();
    const setLocale = (lang) => {
      i18n.setLocale(lang);
    };

    return {
      setLocale,
    };
  },
};
</script>
```
