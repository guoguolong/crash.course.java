package club.banyuan.ioc;

import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.ComponentScan;

@ComponentScan({"club.banyuan.ioc.service", "club.banyuan.ioc.entity"})
@Configuration
public class AppContext {
}