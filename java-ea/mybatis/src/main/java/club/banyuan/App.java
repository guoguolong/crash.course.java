package club.banyuan;

import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.io.Resources;
import java.io.InputStream;
import java.io.IOException;
import club.banyuan.entity.User;

public class App {
    public static SqlSessionFactory getSessionFactory() throws IOException {
        String resource = "mybatis-config.xml";
        InputStream inputStream = Resources.getResourceAsStream(resource);
        return new SqlSessionFactoryBuilder().build(inputStream);
    }

    public static void main(String[] args) {

        try (SqlSession session = App.getSessionFactory().openSession()) {
            User user = (User) session.selectOne("club.banyuan.mapper.UserMapper.selectOne", 2);
            System.out.println("Nickname: " + user.getNickname());
            System.out.println("Username: " + user.getUsername());
            System.out.println("Password: " + user.getPassword());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}