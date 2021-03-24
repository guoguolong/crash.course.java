## A. 仅固定 aside 块（超出视窗，滚到视窗外），实现方案：

* 1. index.html + js-resize.css + js-resize.js
使用 js 在窗口 resize 时，重新计算 aside 高度，

* 2. index.html + vh-scroll.css
使用calc + vh方案（vh 的浏览器兼容性不够好）。
窗口 resize 时，vh方案会自动重新计算屏幕高度，但是由于没有动态计算 header 在视口内的高度，aside的高度没有撑满屏幕

该方案特点（缺点）：当正文超过屏幕高度并且比左侧导航高度更高，滚动到正文尾部，左侧导航将滚到到视口外面。

该方案存在的问题：窗口 resize 时，js 和 vh 由于没有动态地正确计算 header 在视口内的高度，导致aside的高度并没有撑满屏幕。所以resize方案必须结合scroll事件。


## B. 固定 aside 和 header 块，实现方案：

* 1. index.html + fixed-scroll.css
postion:fixed，最经典的解决方案

* 2. index.html + js-sticky-resize.css + js-resize.js
postion:sticky，和 fixed 很类似

* 3. index.html + vh-sticky-scroll.css
使用calc + vh、postion:sticky 方案（vh 的浏览器兼容性不够好）。


## C. 仅固定 aside 块（超出视窗时：aside不变，页面其他部分滚到视窗外），实现方案：

* 1. index.html + js-scroll.css + js-scroll.js
页面 scroll 和 resize 的时候都要重新计算 aside 高度