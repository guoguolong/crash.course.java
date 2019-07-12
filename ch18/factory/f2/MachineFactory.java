/*
 * Copyright (C) 2018-2019 Banyuan All rights reserved
 */
/**
 * 工厂方法,如果工厂还有其他的一些方法，比如维修，因此，对工厂构造方法进行抽象。
 * @version 1.0
 * @author Yang Wen
 *
 */
public class MachineFactory implements FactoryMethod {

    @override
    public Machine produce(String types) {
        if ("red".equals(types)) {
            return new RedMachine();
        } else {
            return new BlueMachine();
        }
    }

    @override
    public Machine repair() {
        return null;
    }
}
