/*
 * Copyright (C) 2018-2019 Banyuan All rights reserved
 */
/**
 * 用户登录窗口类
 * @version 1.0
 * @author Yang Wen
 *
 */
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JOptionPane;
import javax.swing.SwingConstants;
import javax.swing.JTextField;
import javax.swing.JButton;
import java.awt.event.ActionListener;
import java.awt.event.ActionEvent;
public class MyFrame {

    private JFrame frame;
    private JTextField tfUsername;
    private JTextField tfPassword;

    /**
     * Launch the application.
     */
    public static void main(String[] args) {
        MyFrame window = new MyFrame();
        window.frame.setVisible(true);

    }

    /**
     * Create the application.
     */
    public MyFrame() {
        initialize();
    }

    /**
     * Initialize the contents of the frame.
     */
    private void initialize() {
        frame = new JFrame("用户登录");
        frame.setBounds(100, 100, 450, 300);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.getContentPane().setLayout(null);

        JLabel label = new JLabel("用户登录");
        label.setHorizontalAlignment(SwingConstants.CENTER);
        label.setBounds(167, 24, 99, 24);
        frame.getContentPane().add(label);

        JLabel label_1 = new JLabel("用户名");
        label_1.setBounds(81, 90, 61, 16);
        frame.getContentPane().add(label_1);

        JLabel label_2 = new JLabel("密码");
        label_2.setBounds(81, 136, 61, 16);
        frame.getContentPane().add(label_2);

        tfUsername = new JTextField();
        tfUsername.setBounds(189, 85, 130, 26);
        frame.getContentPane().add(tfUsername);
        tfUsername.setColumns(10);

        tfPassword = new JTextField();
        tfPassword.setBounds(189, 131, 130, 26);
        frame.getContentPane().add(tfPassword);
        tfPassword.setColumns(10);

        JButton button = new JButton("登录");
        button.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                if (tfUsername.getText().trim().length() == 0) {
                    JOptionPane.showMessageDialog(null, "请输入登录名");
                    return;
                }

                if (tfPassword.getText().trim().length() == 0) {
                    JOptionPane.showMessageDialog(null, "请输入密码");
                    return;
                }

                JOptionPane.showMessageDialog(null, "用户登录功能开发中...");

            }
        });
        button.setBounds(70, 199, 117, 29);
        frame.getContentPane().add(button);

        JButton button_1 = new JButton("取消");
        button_1.setBounds(223, 199, 117, 29);
        frame.getContentPane().add(button_1);
        frame.setLocationRelativeTo(null);
    }
}
