/*
 * Copyright (C) 2018-2019 Banyuan All rights reserved
 */
/**
 * 使用类的封装，领养宠物企鹅
 * @version 1.0
 * @author Yang Wen
 *
 */
import java.util.Scanner;
class Penguin {
	private String name =null; // 昵称
	private int health = 0; // 健康值
	private int love = 0; // 亲密度
	private String sex =null; // 性别

	public Penguin() {
		
	}
	
	public Penguin(String name,int health,String sex){
		this.name=name;
		this.health=health;
		this.sex=sex;
	}
	
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getHealth() {
		return health;
	}

	public void setHealth(int health) {
		if(health<0||health>100){
			System.out.println("健康值应该在0至100之间，默认值为60。");
			this.health=60;
			return;
		}
		this.health = health;
	}

	public int getLove() {
		return love;
	}

	public void setLove(int love) {
		if(love<0||love>100){
			System.out.println("亲密度应该在0至100之间，默认值为10。");
			this.love=10;
			return;
		}
		this.love = love;
	}

	public String getSex() {
		return sex;
	}

	public void setSex(String sex) {
		this.sex = sex;
	}


	/**
	 * 输出企鹅的信息。
	 */
	public void print() {
		System.out.println("宠物的自白：\n我的名字叫" + this.getName() 
				+ "，健康值是" + this.getHealth()	+ "，和主人的亲密度是" 
				+ this.getLove() + "，我的性别是 " + this.getSex() + "。");
	}
	
}
public class PenguinTest {
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
			// 省略选择狗狗
			
			break;
		case 2:
			// 如果是企鹅,选择企鹅性别
			System.out.print("请选择企鹅的性别：（1、Q仔 2、Q妹）");
			int sexId=input.nextInt();	
			String sex="Q妹";
			if(sexId==1)
				sex="Q仔";
			System.out.print("请输入企鹅的健康值（1~100之间）：");
			int health=input.nextInt();
			// 创建企鹅对象并赋值
			Penguin png=new Penguin();
			png.setName(name);
			png.setSex(sex);
			png.setHealth(health);
			//Penguin png=new Penguin(name, health, sex);  //可以使用有参构造方法创建对象
			// 输出企鹅信息
			png.print();
			break;
		}
	}
}
