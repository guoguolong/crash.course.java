javac -cp libs/activation.jar:libs/javax.mail.jar src/main/java/com/banyuan/javaee/*.java -d target
java -cp libs/activation.jar:libs/javax.mail.jar:target com.banyuan.javaee.MailClient 