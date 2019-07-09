package test;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.PreparedStatement;

public class Test01 {
    public static void main(String[] args) {
        String DB_DRIVER = "com.mysql.cj.jdbc.Driver";

        String DB_URL = "jdbc:mysql://192.168.11.22:3306/ywdb";

        String DB_USERNAME = "root";
        String DB_PASSWORD = "Root_123";

        try {
            Class.forName(DB_DRIVER);
            Connection connection = DriverManager.getConnection(DB_URL, DB_USERNAME, DB_PASSWORD);
            PreparedStatement statement = connection.prepareStatement("select * from student");

            ResultSet resultSet = statement.executeQuery();

            while (resultSet.next()) {
                System.out.print(resultSet.getObject(1) + "  ");
                System.out.println(resultSet.getObject(2));
            }

            resultSet.close();
            statement.close();
            connection.close();
        } catch (Exception e) {
            e.printStackTrace();
        }

    }

}