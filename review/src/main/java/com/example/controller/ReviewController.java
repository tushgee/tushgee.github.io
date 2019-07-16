package com.example.controller;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.example.dao.ReviewDAO;
import com.example.model.Review;
import com.google.gson.Gson;

/**
 * Servlet implementation class ReviewController
 */
@WebServlet("/review")
public class ReviewController extends HttpServlet {
    private static final long serialVersionUID = 1L;

    private ReviewDAO dao;
    Gson mapper = new Gson();

    @Override
    public void init() throws ServletException {
        dao = new ReviewDAO();
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        request.setAttribute("reviews", dao.getAllReviews());
        RequestDispatcher view = request.getRequestDispatcher("review.jsp");
        view.forward(request, response);
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String jsonString = request.getParameter("review");
        Review review = mapper.fromJson(request.getParameter("review"), Review.class);
        review.setId(dao.genId());
        dao.addReview(review);

        PrintWriter out = response.getWriter();

        out.print(mapper.toJson(review));
    }

}
