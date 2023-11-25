package com.mobeaze.service;

import com.mobeaze.exception.ProductException;
import com.mobeaze.modal.Cart;
import com.mobeaze.modal.CartItem;
import com.mobeaze.modal.User;
import com.mobeaze.request.AddItemRequest;

public interface CartService {
	
	public Cart createCart(User user);
	
	public String addCartItem(Long userId,AddItemRequest req) throws ProductException;
	
	public Cart findUserCart(Long userId);

}
