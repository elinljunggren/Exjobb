package backend;

import java.sql.*;
/**
 * Created by elin on 17-02-22.
 */
public class DBConnection {

    //String host = "127.0.0.1";
    private String database = "envac_app";
    private String url = "jdbc:mysql://localhost:3306/" + database;
    private String user = "root";
    private String password = "mysql";
    private String driver = "com.mysql.jdbc.Driver";

    public void setupDatabase(String database) {
        this.database = database;


        try {
            Class.forName(driver);
            Connection con = DriverManager.getConnection(url, user, password);
            Statement stmt = con.createStatement();
            /*ResultSet rs = stmt.executeQuery("select * from emp");

            while (rs.next()) {
                System.out.println(rs.getInt(1) + "  " + rs.getString(2) + "  " + rs.getString(3));
            }*/

            con.close();
        } catch (Exception e) {
            System.out.println(e);
        }
    }
}

