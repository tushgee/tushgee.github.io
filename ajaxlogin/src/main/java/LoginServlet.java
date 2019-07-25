import com.google.gson.Gson;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
@WebServlet("/login")
public class LoginServlet extends HttpServlet {
    Gson mapper = new Gson();
    User user1 = new User("tushgee", "123");

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        super.doGet(req, resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
//        String jsonString = req.getParameter("user");
//        User user = mapper.fromJson(req.getParameter("user"), User.class);

  //      String jsonResponse = "{login:1}";
        PrintWriter out = resp.getWriter();
        //out.print(mapper.toJson(user));
      //  out.print(user.checkUsername("tushgee"));

        String username = req.getParameter("user");
        out.print(username);
        // out.print("tushgee".equals(username) ? 10 : 0);
    }
}
