import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Arrays;

@WebServlet("/login")
public class LoginServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
            resp.sendRedirect("index.jsp");
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String username = req.getParameter("txtUsername");
        String password = req.getParameter("txtPassword");
        String[] rememberMe = req.getParameterValues("chkRemember");


        PrintWriter out = resp.getWriter();
        User user = User.getUserFromDatabase(username, password);

        // When both user exists in your data set and password is correct for the user.
        if ( user != null) {

            HttpSession session = req.getSession(); //creates new session if none exists
            session.setMaxInactiveInterval(30*24*60*60); //seconds
            session.setAttribute("user", user);

            if (rememberMe != null) {
                Cookie cookieName = new Cookie("username", user.getUsername());
                session.setAttribute("remember", rememberMe[0]);
                cookieName.setMaxAge(30*24*60*60);
                resp.addCookie(cookieName);
                Cookie cookieRemember = new Cookie("remember", rememberMe[0]);
                cookieRemember.setMaxAge(30*24*60*60);
                resp.addCookie(cookieRemember);
            } else {
                for (Cookie cookie: req.getCookies()){
                    if (cookie.getName().equals("username")){
                        Cookie cookieName = new Cookie("username", null);
                        cookieName.setMaxAge(0);
                        resp.addCookie(cookieName);
                    }
                    if (cookie.getName().equals("remember")){
                        Cookie cookieRemember = new Cookie("remember", null);
                        cookieRemember.setMaxAge(0);
                        resp.addCookie(cookieRemember);
                    }

                }


            }


            resp.sendRedirect("/review");

        } else {
          //  out.print("<html><head><title>Test</title></head><body>");
          //  out.print("<p>Try again!</p>");
          //  out.print("</body></html>");

            resp.sendRedirect("index.jsp"); // within same application

        }





    }
}
