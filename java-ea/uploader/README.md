# 文件上传示例

## 打包 war 文件：

```
mvn package
```

## 发布 war 到 tomcat

复制 targets/uploader.war 到 tomcat 的 webapps目录下

## 测试文件上传

启动tomcat，浏览器访问： http://localhost:8080/uploader 上传一张图片，如果成功，将显示图片在网页上


## 更多思考？

* 上传文件在服务器上存储规划？
* 上传文件的安全性如何处理？
* 如何处理多个文件上传？
* Apache 的 commons-fileupload 组件会更方便吗？
* 基于 SpringMVC 框架开发，如何处理文件上传？
