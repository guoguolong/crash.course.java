package club.banyuan.javaee;

import java.util.Properties;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

/**
 * @author Allen Guo
 *
 */
public class MailClient {
    public static void main(String[] args) throws AddressException, MessagingException {
        System.out.print("Mail sending......");

        Properties properties = new Properties();
        properties.put("mail.transport.protocol", "smtp");// 连接协议
        properties.put("mail.smtp.host", "smtp.qq.com");// 主机名
        properties.put("mail.smtp.port", 465);// 端口号
        properties.put("mail.smtp.auth", "true");
        properties.put("mail.smtp.ssl.enable", "true");// 设置是否使用ssl安全连接, 一般都使用
        // properties.put("mail.debug", "true");// 设置是否显示debug信息 true 会在控制台显示相关信息

        Session session = Session.getInstance(properties); // 得到回话对象

        Message message = new MimeMessage(session); // 获取邮件对象
        message.setFrom(new InternetAddress("guo.jun.long@foxmail.com")); // 设置发件人邮箱地址
        message.setRecipients(Message.RecipientType.TO, new InternetAddress[] {
            new InternetAddress("740369030@qq.com"),
            new InternetAddress("guojunlong@banyuan.club")
        }); // 设置收件人邮箱地址
        message.setSubject("半圆邀请你来参加软件大会."); // 设置邮件标题
        message.setText("IT技术能助力企业腾飞，诚邀您于3000年来我司参加活."); // 设置邮件内容

        Transport transport = session.getTransport(); // 得到邮差对象
        transport.connect("guo.jun.long@foxmail.com", "cergamnsxvtobege");
        transport.sendMessage(message, message.getAllRecipients());  // 发送邮件
        transport.close();
        System.out.println("Done.");
    }
}