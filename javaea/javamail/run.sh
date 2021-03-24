javac -cp libs/activation.jar:libs/javax.mail.jar src/main/java/club/banyuan/javaee/*.java -d target
java -cp libs/activation.jar:libs/javax.mail.jar:target club.banyuan.javaee.MailClient 