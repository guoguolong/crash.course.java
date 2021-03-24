# Servlet示例

## 打包 war 文件：

```
mvn package
```

## 发布 war 到 tomcat

复制 targets/servlets.war 到 tomcat 的 webapps目录下

## 测试 servlet

启动tomcat，浏览器访问： http://localhost:8080/servlets/index ，如果正确应该显示

```
Hello Servlet.
```

在页面上
