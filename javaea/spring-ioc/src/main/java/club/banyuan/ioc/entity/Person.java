package club.banyuan.ioc.entity;

import org.springframework.stereotype.Component;
import org.springframework.context.annotation.Scope;

@Component("person")
@Scope("prototype")
public class Person {
    private String name = "地球人";
    public void setName(String name) {
        this.name = name;
    }

    public String getName() {
        return this.name;
    }

    public String toString() {
        return this.name;
    }
}