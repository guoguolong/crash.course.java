package club.banyuan.spring;

import club.banyuan.spring.Application;
import club.banyuan.spring.entity.Users;
import club.banyuan.spring.entity.UsersExample;
import club.banyuan.spring.mapper.UsersMapper;
import java.util.List;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@SpringBootTest(classes = Application.class)
@RunWith(SpringRunner.class)
public class PeopleMapperTest {
  @Autowired
  private UsersMapper usersMapper;

  @Test
  public void addPeople(){
    Users people  = new Users();
    people.setName("hhhhh");
//        peopleService.addPeople(people);
    UsersExample usersExample = new UsersExample();
    usersExample.createCriteria().andNameEqualTo("Henry");
    List<Users> users = usersMapper.selectByExample(usersExample);

    System.out.println("测试完毕");


  }
}
