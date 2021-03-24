package com.banyuan.springsession;

import javax.servlet.http.HttpSession;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping
public class HelloController  {

    @RequestMapping("login")
    private String login(HttpSession session) {
        session.setAttribute("name", "Bob");
        return "success";
    }

    @RequestMapping("/")
    private String index(HttpSession session) {
        Object name = session.getAttribute("name");
        if (name == null) return "session lost";
        return "Hi," + name;
    }   
}