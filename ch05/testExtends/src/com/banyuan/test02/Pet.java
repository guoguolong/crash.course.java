/*
 * Copyright (C) 2018-2019 Banyuan All rights reserved
 */
/**
 * 宠物类，狗狗和企鹅的父类。
 * @version 1.0
 * @author Yang Wen
 *
 */
package com.banyuan.test02;

public class Pet {
    private String name = "无名氏";// 昵称
    private int health = 100;// 健康值
    private int love = 0;// 亲密度
    /**
     * 无参构造方法。
     */
    public Pet() {
        this.health = 95;
        System.out.println("执行宠物的无参构造方法。");
    }
    /**
     * 有参构造方法。
     * @param name  昵称
     */
    public Pet(String name) {
        this.name = name;
    }
    public String getName() {
        return name;
    }
    public int getHealth() {
        return health;
    }
    public int getLove() {
        return love;
    }
    /**
     * 输出宠物信息。
     */
    public void print() {
        System.out.println("宠物的自白：\n我的名字叫" +
                           this.name + "，我的健康值是" + this.health
                           + "，我和主人的亲密程度是" + this.love + "。");
    }
}
