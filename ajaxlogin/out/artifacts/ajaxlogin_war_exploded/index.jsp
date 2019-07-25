<%--
  Created by IntelliJ IDEA.
  User: Tushig
  Date: 7/17/2019
  Time: 5:41 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
  <head>
    <title>Login</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script type="text/javascript" src="resources/js/login.js"></script>
  </head>
  <body>
      <p>
        <label for="username">Username: <input name="txt_username" id="txt_username" />
        <span id="userinfo"></span>
        </label>
      </p>
      <p>
        <label for="password">Password: <input name="txt_password" id="txt_password" /></label>
      </p>
      <p>
      <input type="submit" value="Login" id="btn_login" />
      </p>
  </body>
</html>
