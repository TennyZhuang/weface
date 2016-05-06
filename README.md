# weface
A front-end library for display wechat message with faces.

## Install

```
bower install weface
```

## Usage

```javascript
var weface = new Weface('/path/to/wechat_face_images/');

weface.compile('123\:bye');
// 123<img class="wechatface" style="width: 1em; height: 1em;" src="/path/to/wechat_face_images/40.png" alt="/:bye">

// option: escaped
weface = new Weface('/path/to/wechat_face_images/', true);

weface.compile('/:@&gt;123');
// <img class="wechatface" style="width: 1em; height: 1em;" src="/path/to/wechat_face_images/47.png" alt="/:@&gt;">123
```
