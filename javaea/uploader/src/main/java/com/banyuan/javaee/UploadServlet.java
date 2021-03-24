package club.banyuan.javaee;

import java.io.File;
import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Part;

@WebServlet("/upload")
@MultipartConfig
public class UploadServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String savePath = request.getServletContext().getRealPath("/files");
        File file = new File(savePath);
        // 如果文件所在目录不存在，创建先
        if(!file.exists()) {
            file.mkdirs();
        }
        String fileName = null;;
        try {
            Part part = request.getPart("file");
            String header = part.getHeader("content-disposition");
            fileName = getFileName(header);
            part.write(savePath + File.separator + vfileName);
        } catch (Exception e) {
            e.printStackTrace();
            fileName = null;
        }

        String result = "<img src=\"files/" + fileName + "\" />";
        if (fileName == null) {
            result = "保存文件失败.";
        }
        response.setContentType("text/html;charset=UTF-8");
        response.getWriter().println(result);
    }

    public String getFileName(String header) {
        String[] tempArr1 = header.split(";");
        String[] tempArr2 = tempArr1[2].split("=");
        String fileName = tempArr2[1].substring(tempArr2[1].lastIndexOf("\\")+1).replaceAll("\"", "");
        return fileName;
    }
}