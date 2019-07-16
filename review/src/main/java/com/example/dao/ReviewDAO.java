package com.example.dao;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.example.model.Review;


public class ReviewDAO {
	
	Map<Integer, Review> reviewsDb = new HashMap<>();
	
	{
		reviewsDb.put(1, new Review(1, "Nina Shuler", "Our room was clean and the decor was up to date. Since my husband and I were from out of state, we asked the employee at the front desk where the best place to go for food nearby is and they gave us a variety ……", 4));
		reviewsDb.put(2, new Review(2, "Jennifer Mital", "Helpful and courteous staff, and the rooms appeared clean; however, all of us got bug bites and we found bugs on our luggage when we got home. The room smelled like people had smoked in it and the exterior doors at the end of the hallway ??", 2));
	//	reviewsDb.put(3, new Review(3, "Bingo", "Nice Stay!", 5));

	}
	
	public void addReview(Review review){
		reviewsDb.put(review.getId(), review);
	}
	
	public void deleteReview(int reviewId){
		reviewsDb.remove(reviewId);
	}
	
	public void updateReview(Review review){
		reviewsDb.put(review.getId(), review);
	}
	
	public List<Review> getAllReviews(){
		return new ArrayList<>(reviewsDb.values());
	}
	
	public Review getReviewById(int reviewId){
		return reviewsDb.get(reviewId);
	}

	public int genId() {
		return reviewsDb.size()+1;
	}
}
