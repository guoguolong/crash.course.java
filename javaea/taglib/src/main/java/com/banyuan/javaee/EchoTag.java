package com.banyuan.javaee;

import java.io.IOException;
import javax.servlet.jsp.*;
import javax.servlet.jsp.tagext.*;

public class EchoTag extends SimpleTagSupport {
    private JspFragment body;
    private String value;

    public void setValue(String value) {
        this.value = value;
    }

    public void setJspBody(JspFragment jspBody) {
        this.body = jspBody;
    }

    @Override
    public void doTag() throws JspException, IOException {
        JspContext jspCtx = getJspContext();
        JspWriter out = jspCtx.getOut();
        out.println(this.value);
    }
}