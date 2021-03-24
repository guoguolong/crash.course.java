## relative-before.html

div 的 :before 设置 position: absolute;时，该 div应设置 position:relative，否则:before 的高度设置100%时是不会生效的

## sticky.html

* 父元素不能有overflow属性
* left、top、right、bottom必须要有一个
* 仅在父元素内生效，父元素的高度必须大于sticky元素的高度
* ios加前缀-webkit-sticky（考虑到兼容问题）