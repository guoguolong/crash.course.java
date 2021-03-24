package club.banyuan.ioc.service.impl;

import org.springframework.stereotype.Component;
import org.springframework.beans.factory.annotation.Autowired;
import club.banyuan.ioc.service.AnimalService;
import club.banyuan.ioc.entity.Person;

@Component("birdService")
public class BirdServiceImpl implements AnimalService {
    @Autowired
    private Person master;

    public void run() {
        System.out.println("我是愤怒的小鸟、我正在飞！");
    }

    public Person getMaster() {
        return this.master;
    }
}

