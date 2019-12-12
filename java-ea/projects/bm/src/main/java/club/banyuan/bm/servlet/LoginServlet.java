package club.banyuan.bm.servlet;

import org.apache.commons.lang3.StringUtils;
import org.apache.log4j.Logger;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

public class LoginServlet extends HttpServlet {
    private static Logger logger = Logger.getLogger(LoginServlet.class);

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        logger.debug("进入登陆的doGet");
        doPost(req, resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        logger.debug("进入登陆的doPost");
        //获取当前servlet的初始化参数
        String welcome = getInitParameter("welcome");
        logger.debug("获取到当前容器的初始参数welcome:"+welcome);
        //获取整个servlet的参数
        String address = getServletContext().getInitParameter("address");
        logger.debug("address:"+address);
        String welcome1 = getServletConfig().getInitParameter("welcome");
        String address1 = getServletConfig().getInitParameter("address");


        resp.setContentType("text/html;charset=utf-8");
        resp.setCharacterEncoding("utf-8");
//        PrintWriter out = resp.getWriter();
//        out.println("欢迎来到半圆学习");
        //判断用户名是不是Henry, 是henry的话跳出去
        String userName = req.getParameter("userName");
        String passWord = req.getParameter("passWord");
        logger.debug("用户名:" + userName + "密码：" + passWord);
        if (StringUtils.equals("Henry", userName)) {
            logger.info("输入的正确的用户名：" + userName);
//            resp.sendRedirect("index.jsp");
            resp.sendRedirect("index.html");
        }
        else {
//            resp.sendRedirect("error");
            resp.sendRedirect("404.html");
        }




    }
}
