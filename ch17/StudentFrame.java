/*
 * Copyright (C) 2018-2019 Banyuan All rights reserved
 */
/**
 * 学生信息窗口类
 * @version 1.0
 * @author Yang Wen
 *
 */
import java.awt.BorderLayout;
import java.awt.EventQueue;
import java.awt.Label;

import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.JScrollPane;
import javax.swing.JTabbedPane;
import javax.swing.JTable;
import javax.swing.border.EmptyBorder;

public class StudentFrame extends JFrame {

	private JPanel contentPane;
	private JTable table;

	/**
	 * Launch the application.
	 */
	public static void main(String[] args) {
		StudentFrame frame = new StudentFrame();
		frame.setVisible(true);

	}

	/**
	 * Create the frame.
	 */
	public StudentFrame() {
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		setBounds(100, 100, 641, 600);
		contentPane = new JPanel();
//		contentPane.setBorder(new EmptyBorder(5, 5, 5, 5));
		contentPane.setLayout(new BorderLayout(0, 0));
		setContentPane(contentPane);

		JTabbedPane tabbedPane = new JTabbedPane(JTabbedPane.TOP);
		contentPane.add(tabbedPane, BorderLayout.NORTH);
		tabbedPane.addTab("add", new Label("添加学生"));
		tabbedPane.addTab("update", new Label("更新学生"));
		tabbedPane.addTab("delete", new Label("删除学生"));

		Object[][] data = { { "zhangsan", 10 }, { "lisi", 20 }, { "王五", 30 } };
		Object[] col = { "姓名", "年龄" };
		table = new JTable(data, col);

		JScrollPane scrollPane = new JScrollPane(table);
		JPanel panel = new JPanel();

		panel.add(scrollPane);

		contentPane.add(panel, BorderLayout.CENTER);

	}

}
