package com.example.model;

import java.time.LocalDate;

public class Review {
	private int id;
	private String reviewerName;
	//private LocalDate reviewDate;
	private String reviewText;
	private int reviewScore;

	public Review(int id, String rname, String rtext, int rscore) {
		super();
		this.id = id;
		this.reviewerName = rname;
		this.reviewText = rtext;
		this.reviewScore = rscore;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getReviewerName() {
		return reviewerName;
	}

	public void setReviewerName(String name) {
		this.reviewerName = name;
	}

	public String getReviewText() { return reviewText; }

	public void setReviewText(String text) {
		this.reviewText = text;
	}

	public int getReviewScore() { return reviewScore; }

	public void setReviewScore(int score) { this.reviewScore = score; }

}
