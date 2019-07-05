/*
 * Copyright (C) 2018-2019 Banyuan All rights reserved
 */
/**
 * 狗狗类，宠物的子类
 * @version 1.0
 * @author Yang Wen
 *
 */
package com.banyuan.test02;

public class Dog extends Pet {
    private String strain;// 品种

    /**
     * 有参构造方法。
     * @param name   昵称
     * @param strain   品种
     */
    public Dog(String name, String strain) {
        super(name); //此处不能使用this.name=name;
        this.strain = strain;
    }

    public void setStrain(String strain) {
        this.strain = strain;
    }
    public String getStrain() {
        return strain;
    }

    public void print() {
        super.print();
        System.out.println("我是一只" + this.getStrain() + "犬。");
    }
}