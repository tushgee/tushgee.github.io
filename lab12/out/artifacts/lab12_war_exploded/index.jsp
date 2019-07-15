<%--
  Created by IntelliJ IDEA.
  User: Tushig
  Date: 7/11/2019
  Time: 1:40 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
  <head>
    <title>Secure login:</title>
  </head>
  <body>

  <%
      String userName = "", rememberVal="";
      for (Cookie cookie: request.getCookies()){
          if (cookie.getName().equals("username")){
              userName = cookie.getValue();
          }
          if (cookie.getName().equals("remember")){
              rememberVal = cookie.getValue();
          }

      }
  %>

    <form method="post" action="login" />
        Name: <input name="txtUsername"  value="<%= userName %>" /><br/>
        Password: <input name="txtPassword" type="password" /><br/>
        <label>Remember me:</label><input name="chkRemember" type="checkbox" value="remembered"
                <%= "remembered".equals(rememberVal.trim()) ? "checked=checked" : "" %> /><br/>
        <input type="submit" value="Login" />
    </form>


  </body>
</html>
