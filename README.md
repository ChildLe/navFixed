navFixed
========
这是一款轻量级js插件。
它可以让原本不是在顶部的导航条，在滚动到它的位置时固定在顶部。

[jQuery版本以及官网](http://navfixed.jasinyip.com/)

## 使用方法
1.引入 navFixed.js。

2.navFixed(selector)。

## 示例
```html
<div></div>
<div id="nav">导航栏</div>
<div></div>
```
```html
<script src="navFixed.js"></script>
<script>
var nav=document.getElementById('nav');
navFixed(nav);
</script>
```
