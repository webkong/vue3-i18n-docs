# 使用

## 一般格式化

语言环境信息如下：

```js
const messages = {
  en: {
    message: {
      hello: "hello world",
    },
  },
};
```

模板如下：

```html
<p>{{ $t('message.hello') }}</p>
```

输出如下：

```html
<p>hello world</p>
```

## 具名格式化

语言环境信息如下：

```js
const messages = {
  en: {
    message: {
      hello: "{msg} world",
    },
  },
};
```

模板如下：

```html
<p>{{ $t('message.hello', { msg: 'hello' }) }}</p>
```

输出如下：

```html
<p>hello world</p>
```

## 列表格式

语言环境信息如下：

```js
const messages = {
  en: {
    message: {
      hello: "{0} world",
    },
  },
};
```

模板如下：

```html
<p>{{ $t('message.hello', ['hello']) }}</p>
```

输出如下：

```html
<p>hello world</p>
```

列表格式也接受类似数组的对象：

```html
<p>{{ $t('message.hello', {'0': 'hello'}) }}</p>
```

输出如下：

```html
<p>hello world</p>
```
