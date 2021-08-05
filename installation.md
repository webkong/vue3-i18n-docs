# Installation

## Compatibility Note

- Vue.js `2.0.0`+

## Direct Download / CDN

<https://unpkg.com/vue3-i18n>

[unpkg.com](https://unpkg.com) provides NPM-based CDN links. The above link will always point to the latest release on NPM. You can also use a specific version/tag via URLs like <https://unpkg.com/vue3-i18n@1.1.3/dist/vue3-i18n.js>

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

When using with a module system, you must explicitly install the `vue3-i18n`
via `Vue.use()`:

```javascript
import Vue from "vue";
import VueI18n from "vue3-i18n";

Vue.use(VueI18n);
```
