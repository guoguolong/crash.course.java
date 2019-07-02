/*
 * Copyright (C) 2018-2019 Banyuan All rights reserved
 */
/**
 * 领养宠物
 * @version 1.0
 * @author Yang Wen
 *
 */
import java.util.Scanner;
class Dog {
	String name = "无名氏"; // 昵称，默认值是"无名氏"
	int health = 100; // 健康值，，默认值是100
	int love = 0; // 亲密度
	String strain = "聪明的拉布拉多犬"; // 品种
	/**
	 * 输出狗狗的信息。
	 */
	public void print() {
		System.out.println("宠物的自白：\n我的名字叫" + this.name + 
				"，健康值是"	+ this.health + "，和主人的亲密度是"
				+ this.love + "，我是一只 " + this.strain + "。");
	}
}
class Penguin {
	String name = "无名氏"; // 昵称
	int health = 100; // 健康值
	int love = 0; // 亲密度
	String sex = "Q仔"; // 性别
	/**
	 * 输出企鹅的信息。
	 */
	public void print() {
		System.out.println("宠物的自白：\n我的名字叫" + this.name +
				"，健康值是"	+ this.health + "，和主人的亲密度是" 
				+ this.love + "，性别是 " + this.sex + "。");
	}
}
public class PetTest {
	public static void main(String[] args) {
		Scanner input = new Scanner(System.in);
		System.out.println("欢迎您来到宠物店！");
		// 1、 输入宠物名称
		System.out.print("请输入要领养宠物的名字：");
		String name = input.next();
		// 2、 选择宠物类型
		System.out.print("请选择要领养的宠物类型：（1、狗狗 2、企鹅）");
		switch (input.nextInt()) {
		case 1:
			//如果是狗狗，选择狗狗品种
			System.out.print("请选择狗狗的品种:(1、聪明的拉布拉多犬" +
					" 2、酷酷的雪娜瑞)");
			String strain = null;
			if (input.nextInt() == 1) {
				strain = "聪明的拉布拉多犬";
			} else {
				strain = "酷酷的雪娜瑞";
			}
			// 创建狗狗对象并赋值
			Dog dog = new Dog();
			dog.name = name;
			dog.strain = strain;
			// 输出狗狗信息
			dog.print();
			break;
		case 2:
			// 2.2、如果是企鹅,选择企鹅性别
			System.out.print("请选择企鹅的性别：（1、Q仔 2、Q妹）");
			String sex = null;
			if (input.nextInt() == 1)
				sex = "Q仔";
			else
				sex = "Q妹";
			// 创建企鹅对象并赋值
			Penguin pgn = new Penguin();
			pgn.name = name;
			pgn.sex = sex;
			// 输出企鹅信息
			pgn.print();
		}
	}
}
