import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet("/login")
public class LoginServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
      super.doGet(req, resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String username = req.getParameter("txtUsername");
        String password = req.getParameter("txtPassword");
        PrintWriter out = resp.getWriter();
        // When both user exists in your data set and password is correct for the user.
        if ( "tushgee".equals(username) && "123".equals(password) ) {

            HttpSession session = req.getSession(); //creates new session if none exists
            session.setMaxInactiveInterval(10*24*60*60); //seconds
            session.setAttribute("user", username);

            out.print("<html><head><title>Test</title></head><body>");
            out.print("<p>Thank you! <a href='logout'> Log out!</s></p>");
            out.print("</body></html>");

        } else {
            out.print("<html><head><title>Test</title></head><body>");
            out.print("<p>Try again!</p>");
            out.print("</body></html>");



        }

    }
}
