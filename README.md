### rem 自适应页面

请在移动端浏览效果 ^_^

https://sunguangqing.github.io/remHTML/youpin.html

https://sunguangqing.github.io/remHTML/index.html


### rem 自适应页面, 监听浏览器, 针对不同分辨率计算font-size

### `注意要在HTML页面<head></head>的内容顶部添加如下 mate 标签：`
```HTML
<meta charset="UTF-8">
<!-- 根据浏览器的屏幕大小自适应的展现合适的效果 -->
<meta name="applicable-device" content="pc,mobile" />
<!-- 移动端 浏览器中页面将以原始大小显示，不允许缩放 -->
<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" />
<!--自动选择更好的浏览器-->
<meta name="renderer" content="webkit">
```

#### `JS代码：`
```javascript
(function (doc, win) {
    var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function () {
       var clientWidth = docEl.clientWidth;
       if (!clientWidth) return;
       /*720为设计稿大小*/
       docEl.style.fontSize = 100 * (clientWidth / 720) + 'px';
    };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);  
})(document, window);
```

### >在js中添加如上JS代码, 然后结果就是以 1px = 0.01rem; 的比例去对页面布局实现自适应。
