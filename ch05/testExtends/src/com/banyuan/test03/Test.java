/*
 * Copyright (C) 2018-2019 Banyuan All rights reserved
 */
/**
 * 测试类，测试类的继承。
 * @version 1.0
 * @author Yang Wen
 *
 */
package com.banyuan.test03;

public class Test {
	public static void main(String[] args) {
		Dog dog = new Dog("欧欧", "雪娜瑞");
		dog.setHealth(80); //设置健康值，以便正常喂食
		Penguin pgn = new Penguin("楠楠", "Q妹");
		Master master=new Master("王先生",100);
		master.feed(dog);//主人给狗狗喂食
		master.feed(pgn);//主人给企鹅喂食
		pgn.setHealth(80); //设置健康值，以便正常喂食
		master.feed(pgn);//主人再次给企鹅喂食
	}
}
