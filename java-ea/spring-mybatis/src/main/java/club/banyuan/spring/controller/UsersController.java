package club.banyuan.spring.controller;

import club.banyuan.spring.entity.Users;
import javax.servlet.http.HttpServletRequest;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Controller
public class UsersController{


  @RequestMapping("/getUser")
  public String getUserInfo(HttpServletRequest req,Model model){
    Users users = new Users();
    users.setName("test");
    model.addAttribute("user",users);
    System.out.println(req.getSession().getId()+"***");
    req.setAttribute("slogan","happy");
    return "users";
  }


}
