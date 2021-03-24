package com.banyuan.springredis;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import javax.annotation.PostConstruct;

@SpringBootApplication
public class SpringRedisApplication {
    @Autowired
    private RedisTemplate<String, Object> redisTemplate;

    @PostConstruct
    public void run() {
        // ApplicationContext ctx = new AnnotationConfigApplicationContext(AppContext.class);
        // RedisTemplate redisTemplate = ctx.getBean(RedisTemplate.class);

        redisTemplate.opsForValue().set("address", "Qingdao China");
        System.out.println("Address is : " + redisTemplate.opsForValue().get("address"));
    }

	public static void main(String[] args) {
		SpringApplication.run(SpringRedisApplication.class, args);
	}

}
