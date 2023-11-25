package com.mobeaze.service;

import com.mobeaze.exception.CartItemException;
import com.mobeaze.exception.UserException;
import com.mobeaze.modal.Cart;
import com.mobeaze.modal.CartItem;
import com.mobeaze.modal.Product;

public interface CartItemService {
	
	public CartItem createCartItem(CartItem cartItem);
	
	public CartItem updateCartItem(Long userId, Long id,CartItem cartItem) throws CartItemException, UserException;
	
	public CartItem isCartItemExist(Cart cart,Product product,String size, Long userId);
	
	public void removeCartItem(Long userId,Long cartItemId) throws CartItemException, UserException;
	
	public CartItem findCartItemById(Long cartItemId) throws CartItemException;
	
}
