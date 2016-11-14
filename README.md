# weface
A front-end library for display wechat message with faces.

## Install

```
bower install weface
```

## Usage

```html
<link rel="stylesheet" href="bower_components/weface/dist/weface.css">
<script src="bower_components/weface/dist/weface.js"></script>
```

```javascript
var weface = new Weface();

weface.compile('123/:bye');
// 123<div class="wechatface wechatface-40"></div>

// option: escaped
weface = new Weface({
  escaped: true
});

weface.compile('/:@&gt;123');
// <div class="wechatface wechatface-47"></div>123

// option: styles
weface = new Weface({
  styles: {
    'width': '50px',
    'vertical-align': 'baseline'
  }
});
```

## Build

You need `gulp-cli`, you should have `gulp` in your path.

```
> npm install
> gulp
```
