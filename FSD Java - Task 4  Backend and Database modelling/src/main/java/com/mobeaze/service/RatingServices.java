package com.mobeaze.service;

import java.util.List;

import com.mobeaze.exception.ProductException;
import com.mobeaze.modal.Rating;
import com.mobeaze.modal.User;
import com.mobeaze.request.RatingRequest;

public interface RatingServices {
	
	public Rating createRating(RatingRequest req,User user) throws ProductException;
	
	public List<Rating> getProductsRating(Long productId);

}
