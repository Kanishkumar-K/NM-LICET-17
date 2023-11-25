package com.mobeaze.service;

import java.util.List;

import com.mobeaze.exception.ProductException;
import com.mobeaze.modal.Review;
import com.mobeaze.modal.User;
import com.mobeaze.request.ReviewRequest;

public interface ReviewService {

	public Review createReview(ReviewRequest req,User user) throws ProductException;
	
	public List<Review> getAllReview(Long productId);
	
	
}
