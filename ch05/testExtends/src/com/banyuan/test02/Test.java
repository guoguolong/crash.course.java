/*
 * Copyright (C) 2018-2019 Banyuan All rights reserved
 */
/**
 * 测试类，测试类的继承。
 * @version 1.0
 * @author Yang Wen
 *
 */
package com.banyuan.test02;

import com.banyuan.test02.Dog;
import com.banyuan.test02.Penguin;
import com.banyuan.test02.Pet;

public class Test {
    public static void main(String[] args) {
        // 1、创建宠物对象pet并输出信息
        Pet pet = new Pet("贝贝");
        //pet.print();
        // 2、创建狗狗对象dog并输出信息
        Dog dog = new Dog("欧欧", "雪娜瑞");
        dog.print();
        // 3、创建企鹅对象pgn并输出信息
        Penguin pgn = new Penguin("楠楠", "Q妹");
        pgn.print();
    }
}
