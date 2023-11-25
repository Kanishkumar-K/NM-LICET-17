package com.mobeaze.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.mobeaze.modal.User;

public interface UserRepository extends JpaRepository<User, Long> {
	
	public User findByEmail(String email);

}
