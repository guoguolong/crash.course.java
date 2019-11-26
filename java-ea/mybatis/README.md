## 运行mybastis例子

* 初始化数据库

创建数据库tank，用户名和密码均为tank，然后将 sql 目录下 sql语句导入到 tank数据库

* 从 App.class 运行 mybatis 例子
```
mvn clean package exec:java -Dexec.mainClass="club.banyuan.App"
```

* 从jsp网页运行 mybatis 例子
```
mvn jetty:run
```
然后访问：http://localhost:8080

## Maven： Get技能

### 用jetty插件调试

* 添加jetty plugin

```
  <plugin>  
    <groupId>org.eclipse.jetty</groupId>
    <artifactId>jetty-maven-plugin</artifactId>
    <version>9.4.24.v20191120</version>
  </plugin>
```
* 运行 Jetty
```
mvn jetty:run
```
浏览访问 http://localhost:8080 将默认映射 src/webapp 目录。


### 更多参考

https://www.eclipse.org/jetty/documentation/current/jetty-maven-plugin.html#get-up-and-running

