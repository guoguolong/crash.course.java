package club.banyuan.ioc;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import club.banyuan.ioc.entity.Person;
import club.banyuan.ioc.service.AnimalService;

@SpringBootApplication
public class IocApplication {
    public IocApplication() {
        ApplicationContext ctx = new AnnotationConfigApplicationContext(AppContext.class);
        Person person1 = ctx.getBean(Person.class);
        person1.setName("中国人");
        System.out.println(person1);
        
        Person person2 = (Person)ctx.getBean("person");
        person2.setName("美国人");
        System.out.println(person2);
        
        // AnimalService donkey = (AnimalService) ctx.getBean("donkey"); // AnimalService donkey = ctx.getBean(DonkeyService.class);
        AnimalService dog = ctx.getBean("dogService", AnimalService.class);
        dog.run();
        System.out.println("我的主人是：" + dog.getMaster());
    }

    public static void main(String[] args) {
        SpringApplication.run(IocApplication.class, args);
    }
}