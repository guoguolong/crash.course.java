<%@ page contentType="text/html;charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="org.apache.ibatis.session.SqlSessionFactory" %>
<%@ page import="org.apache.ibatis.session.SqlSessionFactoryBuilder" %>
<%@ page import="org.apache.ibatis.session.SqlSession" %>
<%@ page import="org.apache.ibatis.io.Resources" %>
<%@ page import="java.io.InputStream" %>
<%@ page import="java.io.IOException" %>
<%@ page import="club.banyuan.entity.User" %>
<!DOCTYPE html>
<head>
    <title>MyBatis: getUser</title>
</head>
<body>
<h2>MyBatis: getUser</h2>
<%
InputStream inputStream = Resources.getResourceAsStream("mybatis-config.xml");
SqlSessionFactory factory = new SqlSessionFactoryBuilder().build(inputStream);

SqlSession sqlsSession = factory.openSession();
User user = (User) sqlsSession.selectOne("club.banyuan.mapper.UserMapper.selectOne", 2);
%>
<ul>
    <li><%="Nickname: " + user.getNickname()%></li>
    <li><%="Username: " + user.getUsername()%></li>
    <li><%="Password: " + user.getPassword()%></li>
</ul>
</body>
</html>
