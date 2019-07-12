/*
 * Copyright (C) 2018-2019 Banyuan All rights reserved
 */
/**
 * 抽象工厂类
 * @version 1.0
 * @author Yang Wen
 *
 */
public interface AbstractFactory {
    Vehicle createVehicle();
    Weapon createWeapon();
    Food createFood();
}