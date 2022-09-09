package com.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.springboot.model.Orders;
import com.springboot.model.User;

public interface UserRepository extends JpaRepository<User, Long>{

	@Query("select u from User u where u.userName=?1 or u.email=?1")
	User getByUsernameOrEmail(String user);
	
	@Query("select u from User u where u.userName=?1 or u.email=?2")
	User getByUsernameOrEmail(String userName, String email);

}
