package com.springboot.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.Services.EmailSenderService;
import com.springboot.model.User;
import com.springboot.repository.UserRepository;

@CrossOrigin
@RestController
public class UserController {

	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	EmailSenderService senderService;
	
    //----------------------------------------------------------------------------------
	//add a new user to the db
	@PostMapping("/user") 
	public String addUser(@RequestBody User user) {
		String message;
		//If the username or email does not exist then we create a new user
		User u=userRepository.getByUsernameOrEmail(user.getUserName(),user.getEmail());
		if(u==null) {
			userRepository.save(user);
			message="User created";
		}else {
			message="This username/email already exist"; 
		}
		return message;
	}
    //----------------------------------------------------------------------------------
	//Show all the users in the db
	@GetMapping("/user")
	public List<User> fetchAllUsers() {
		return userRepository.findAll();
	}
    //----------------------------------------------------------------------------------
	//Show a single user based on Username/email
	@GetMapping("/login/{user}")
	public User fetchUser(@PathVariable("user") String userName) {
		User user=userRepository.getByUsernameOrEmail(userName);
		return user;
	}
    //----------------------------------------------------------------------------------
	//update user based on id
	@PutMapping("user/{id}")
	public User updateUser(@PathVariable("id") Long id,@RequestBody User newUser) {
		User userDB=userRepository.getReferenceById(id);
		userDB.setName(newUser.getName());
		userDB.setLastName(newUser.getLastName());
		userDB.setUserName(newUser.getUserName());
		userDB.setPassword(newUser.getPassword());
		userDB.setPhoneNumber(newUser.getPhoneNumber());
		userDB.setAdress(newUser.getAdress());
		return userRepository.save(userDB);
	}
    //----------------------------------------------------------------------------------
	//Send password to user by given email
	@GetMapping("user/forgottenPassword/{email}") 
	public String sendPasswordByEmail(@PathVariable("email") String email) {
		User user=userRepository.getByUsernameOrEmail(email);
		if(user==null) {
			return "Email does not exist";
		}else {
			
			senderService.sendEmail(email, "Login Password", 
					"Your Password is: "+user.getPassword());
			return "Password sent to given email";
			
		}
	}
}