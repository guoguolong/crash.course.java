/*
 * Copyright (C) 2018-2019 Banyuan All rights reserved
 */
/**
 * 具体工厂类，其中Food,Vehicle，Weapon是抽象类
 * @version 1.0
 * @author Yang Wen
 *
 */
public class DefaultFactory implements AbstractFactory {
    @Override
    public Food createFood() {
        return new Apple();
    }
    @Override
    public Vehicle createVehicle() {
        return new Car();
    }
    @Override
    public Weapon createWeapon() {
        return new AK47();
    }
}
