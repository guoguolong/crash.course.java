package club.banyuan.ioc.service.impl;

import org.springframework.stereotype.Component;
import org.springframework.beans.factory.annotation.Autowired;
import club.banyuan.ioc.service.AnimalService;
import club.banyuan.ioc.entity.Person;

@Component("dogService")
public class DogServiceImpl implements AnimalService {
    @Autowired
    private Person person;

    public void run() {
        System.out.println("我是酷狗、我正在奔跑！");
    }

    public Person getMaster() {
        return this.person;
    }
}

