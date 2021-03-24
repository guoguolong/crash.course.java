package club.banyuan.mapper;
import club.banyuan.entity.User;
import org.apache.ibatis.annotations.Select;

public interface UserMapper {
    @Select("SELECT * FROM user WHERE user_id = #{userId}")
    User selectOne(int userId);
}