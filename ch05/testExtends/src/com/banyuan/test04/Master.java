/*
 * Copyright (C) 2018-2019 Banyuan All rights reserved
 */
/**
 * 主人类。
 * @version 1.0
 * @author Yang Wen
 *
 */
package com.banyuan.test04;

public class Master {
	private String name = "";// 主人名字
	private int money = 0; // 元宝数
	/**
	 * 有参构造方法。
	 * @param name 主人名字
	 * @param money 元宝数
	 */
	public Master(String name, int money) {
		this.name = name;
		this.money = money;
	}
	
	public void setName(String name) {
		this.name = name;
	}

	public void setMoney(int money) {
		this.money = money;
	}

	public int getMoney() {
		return money;
	}
	public String getName() {
		return name;
	}
	/**
	 * 主人给宠物喂食。
	 */
	public void feed(Pet pet) {
		pet.eat();
	}
}
