import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;

import java.util.Random;
@WebServlet("/help")
public class SupportServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        PrintWriter out = resp.getWriter();
        out.print("<html><head><title>Test</title></head><body>");
        out.print("<form method=\"post\" />\n" +
                "    Name: <input name=\"txtName\"/><br/>\n" +
                "    Email address: <input name=\"txtEmail\"/><br/>\n" +
                "    Problem: <input name=\"txtProblem\"/><br/>\n" +
                "    Problem description: <textarea name=\"problemDescription\"></textarea><br/>\n" +
                "    <input type=\"submit\" value=\"Help\" />\n" +
                "</form>");
        out.print("</body></html>");
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

        PrintWriter out = resp.getWriter();
        ServletContext sc = getServletContext();
        Random rand = new Random();
        int support_ticket_id = rand.nextInt(1000);

        out.print("<html><head><title>Test</title></head><body>");
        out.print("<p>Thank you! <strong>" + req.getParameter("txtName") + "</strong> for contacting us. We should receive reply from us with in 24 hrs in your email address <strong>" +  req.getParameter("txtEmail") +
                "</strong>. Let us know in our support email <strong>" +  sc.getInitParameter("support-email") +"</strong> if you don't receive reply within 24 hrs. Please be sure to attach your reference <strong>" + support_ticket_id + "</strong> in your email.</p>");
        out.print("</body></html>");
    }
}
