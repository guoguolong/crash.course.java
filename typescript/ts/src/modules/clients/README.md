## # clients/es6/validator-client.js
* validator-v1 : 使用declare module时，不用export；当为npm包定义type时，不要用路径，直接 declare module '模块名' 
* validator-v2 : 定义命名空间，导出命名空间
* validator-v3 : 直接导出每个字段

## # clients/global
定义：类型定义只需要 declare 不需要export。当然可以带命名空间  
引用：<reference path = 语法

## # clients/umd-amd
定义：一定要export，如果是导出一个整体，应使用：   
```typescript
export = xxxx
```
引用：
```typescript
import = require('....')
```
## # clients/umd-global
### 方法 I
定义：global 引用(UMD模块)，类型定义只需要 declare。不需要export。  
引用：`/// <reference path = "../../libs/umd/md5/md5.global.d.ts" /> `

### 方法 II
定义：global 引用(UMD模块)，可以用一个模块导出的.d.ts，再添加一个：
```typescript
export as namespace '全局名';
```  
引用：例 `/// <reference path = "../../libs/umd/md5/md5.d.ts" /> `

## # ghelper-client.ts
typings.d.ts 为第三方模块 ghelper 补充了类型定义，使用 tsc 编译时自动加载

tsc编译不要求命名一定是 .d.ts，可以是任意名.d.ts，甚至 declare module 'ghelper' {... } 可以放到 ghelper-client.ts 文件本身。

关于 ts-node，ts-node 进行编译运行时，不会自动加载相关目录下的 ts文件，应该在 ghelper-client.ts 文件中明确说明引用：

方法 1：/// \<reference 
```typescript
/// <reference path = "../typings.d.ts" /> 
```
方法 2：将 .d.ts 修改为 .d.ts，然后用import导入，如：把 typings.d.ts 修改为 typing.ts，然后导入：
```typescript
import '../typings'
```

## # Pending Issues

* 外部模块 declare module '...'; 简写
* 导入文本文件和远程json文件不工作（!text、json!）