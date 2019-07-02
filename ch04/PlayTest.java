/*
 * Copyright (C) 2018-2019 Banyuan All rights reserved
 */
/**
 * 宠物通过玩游戏增加与主人亲密度，减少健康值
 * @version 1.0
 * @author Yang Wen
 *
 */
import java.util.Scanner;

class Dog {
	private String name = "无名氏"; // 昵称
	private int health = 0; // 健康值
	private int love = 0; // 亲密度
	private String strain = "聪明的拉布拉多犬"; // 品种
	
	public Dog(){
		
	}
	
	/**
	 * 通过构造方法指定狗狗的昵称、品种
	 * @param name 昵称
	 * @param strain 品种
	 */
	public Dog(String name, String strain) {
		this.name = name;
		this.strain = strain;
	}
	
	/**
	 * 通过吃饭增加健康值。
	 */
	public void eat() {
		if (health >= 100) {
			System.out.println("狗狗需要多运动呀！");
		} else {
			health = health + 3;	
			System.out.println("狗狗吃饱饭了！");
		}
	}
	/**
	 * 通过玩游戏增加与主人亲密度，减少健康值。
	 */
	public void play() {
		if (health < 60) {
			System.out.println("狗狗生病了！");
		} else {
			System.out.println("狗狗正在和主人玩耍。");
			health = health - 10;
			love = love + 5;
		}
	}
	
	/**
	 * 设置狗狗昵称
	 */
	public void setName(String name) {
		this.name = name;
	}
	
	/**
	 * 设置狗狗健康值
	 */
	public void setHealth(int health) {
		if(health<0||health>100){
			System.out.println("健康值应该在0至100之间，默认值为60。");
			this.health=60;
			return;
		}
		this.health = health;
	}
	
	/**
	 * 设置狗狗亲密度
	 */
	public void setLove(int love) {
		if(love<0||love>100){
			System.out.println("亲密度应该在0至100之间，默认值为0。");
			this.love=0;
		}
		this.love = love;
	}
	
	/**
	 * 设置狗狗品种
	 */
	public void setStrain(String strain) {
		this.strain = strain;
	}
	/**
	 * 读取狗狗昵称
	 * @return 昵称
	 */
	public String getName() {
		return name;
	}	
	/**
	 * 读取狗狗健康值
	 * @return 健康值
	 */
	public int getHealth() {
		return health;
	}
	/**
	 * 读取狗狗亲密度
	 * @return 亲密度
	 */
	public int getLove() {
		return love;
	}
	/**
	 * 读取狗狗品种
	 * @return 品种
	 */
	public String getStrain() {
		return strain;
	}
	/**
	 * 输出狗狗的信息
	 */
	public void print() {
		System.out.println("宠物的自白：\n我的名字叫" + this.getName() 
				+ "，健康值是" + this.getHealth()	+ "，和主人的亲密度是" 
				+ this.getLove() + "，我是一只 " + this.getStrain() + "。");
	}
}

class Penguin {
	String name = "无名氏"; // 昵称
	int health = 100; // 健康值
	int love = 20; // 亲密度
	//static final String SEX_MALE ="Q仔";
	//static final String SEX_FEMALE="Q妹";
	static final String SEX_MALE = "雄";
	static final String SEX_FEMALE = "雌";
	String sex = ""; // 性别
	/**
	 * 输出企鹅的信息。
	 */
	public void print() {
		System.out.println("宠物的自白：\n我的名字叫" + this.name 
				+ "，健康值是" + this.health 	+ "，和主人的亲密度是" 
				+ this.love + "，性别是 " + this.sex + "。");
	}
}


public class PlayTest {
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
			// 如果是狗狗,选择狗狗品种
			System.out.print("请选择狗狗的品种:(1、聪明的拉布拉多犬" +
					" 2、酷酷的雪娜瑞)");
			String strain = null;
			if (input.nextInt() == 1) {
				strain = "聪明的拉布拉多犬";
			} else {
				strain = "酷酷的雪娜瑞";
			}
			System.out.print("请输入狗狗的健康值（1~100之间）：");
			int health=input.nextInt();
			// 创建狗狗对象并赋值
			//Dog dog = new Dog();
			Dog dog=new Dog(name, strain);
			dog.setHealth(health);
			// 输出狗狗信息
			dog.print();
			break;
		case 2:
			System.out.print("请选择企鹅的性别：（1、Q仔 2、Q妹）");
			int sex=input.nextInt();
			Penguin penguin=new Penguin();
			penguin.name=name;
			if(sex==1)
				penguin.sex=Penguin.SEX_MALE;
			else
				penguin.sex=Penguin.SEX_FEMALE;
			penguin.print();
		}
	}
}
