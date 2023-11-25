package com.mobeaze.service;

import com.mobeaze.exception.UserException;
import com.mobeaze.modal.User;

public interface UserService {
	
	public User findUserById(Long userId) throws UserException;
	
	public User findUserProfileByJwt(String jwt) throws UserException;

}
