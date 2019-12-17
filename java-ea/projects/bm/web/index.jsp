<%--
  Created by IntelliJ IDEA.
  User: hj
  Date: 2019/12/11
  Time: 3:33 下午
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html lang="zh">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>半圆账单管理系统</title>
    <link type="text/css" rel="stylesheet" href="css/style.css" />
</head>
<frameset rows="100,*" cols="*" frameborder="no" border="0" framespacing="0">
    <frame src="top.html" name="topFrame" scrolling="No" noresize="noresize" id="topFrame" />
    <frameset cols="200,*" frameborder="no" border="0" framespacing="0">
        <frame src="left.html" name="leftFrame" scrolling="No" noresize="noresize" id="leftFrame" />
        <frame src="bill.html" name="mainFrame" id="mainFrame" />
    </frameset>
</frameset>
<noframes><body>
</body></noframes>
</html>
