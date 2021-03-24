mvn clean package exec:java -Dexec.mainClass="club.banyuan.javaee.MailClient"

# pom.xm配置插件maven-dependency-plugin
# mvn clean package exec:java

# 手工运行 Java 主类
# mvn clean package dependency:copy-dependencies 
# cd target
# java -cp dependency/activation-1.1.jar:dependency/javax.mail-1.6.2.jar:dependency/javax.mail-api-1.6.2.jar:mailclient-1.0.jar club.banyuan.javaee.MailClient
# mvn exec:java -Dexec.mainClass="club.banyuan.javaee.MailClient"

