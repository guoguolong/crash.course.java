## public/samples/jquery-chosen
jquery.chose插件，使直接在浏览器中使用。

## public/samples/like

官方例子：直接浏览器应用

## src/ref
学习如何使用 ref.

## src/jquery
用 ref 和 jquery 互操作.

### JqueryApp.js
```
import { findDOMNode } from 'react-dom';
```
使用 findDOMNode查找DOM节点.

### ChosenApp.js
```
npm i jquery chosen-js -S
```
* import导入jquery，但chose-js是commonjs 模块，需要使用require，具体为：
```
import $ from 'jquery';
window.jQuery = $; // 这句是必须的，因为 chosen-js 使用了这个全局变量
require("chosen-js") // 不能用import "chosen-js";
```

## src/context

使用 React.createContext 跨组件共享数据


## src/context2

仍然使用 React.createContext 跨组件共享数据，但使用 
```
<XXXContext.Constumer>.... 
```
来消费数据.


## src/error

制作属于自己ErrorBoundary，利用生命周期方法： componentDidCatch

## src/products, src/productsV2

products是自己做的例子，productsV2是官方的实现，可对比一下。

## src/todo

一个带有 redux 的todoApp

## src/todo2/

一个带有 redux 和 react-router的 todoApp

## src/router2

Scroll到屏幕顶部的 Router 实现