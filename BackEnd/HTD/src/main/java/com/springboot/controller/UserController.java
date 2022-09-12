package com.springboot.controller;
import java.util.List;

import org.apache.tomcat.util.codec.binary.Base64;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.Services.EmailSenderService;
import com.springboot.model.UserInfo;
import com.springboot.repository.UserRepository;

@CrossOrigin
@RestController
public class UserController {

	@Autowired
	private UserRepository userRepository;
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Autowired
	EmailSenderService senderService;
	
    //----------------------------------------------------------------------------------
	//add a new user to the db
	@PostMapping("/user") 
	public String addUser(@RequestBody UserInfo user) {
		String message;
		//If the username or email does not exist then we create a new user
		UserInfo u=userRepository.getByUsernameOrEmail(user.getUserName(),user.getEmail());
		if(u==null) {
			//Fetch Raw text password from UserInfo given by User
			String rawPassword = user.getPassword(); //this is a clear text password 
			//Encode the Raw password 
			String encodedPassword = passwordEncoder.encode(rawPassword);
			//Set encoded password in UserInfo
			user.setPassword(encodedPassword);
			//Save UserInfo in DB
			userRepository.save(user);
			message= "User Created succesfully";
			//message="User created";
		}else {
			message="This username/email already exist"; 
		}
		return message; 
		
		
	}
    //----------------------------------------------------------------------------------
	//Show all the users in the db
	@GetMapping("/user")
	public List<UserInfo> fetchAllUsers() {
		return userRepository.findAll();
	}
    //----------------------------------------------------------------------------------
	//Show a single user based on Username/email
	@GetMapping("/login/{user}")
	public UserInfo fetchUser(@PathVariable("user") String userName) {
		UserInfo user=userRepository.getByUsernameOrEmail(userName);
		return user;
	}
    //----------------------------------------------------------------------------------
	//update user based on id 
	@PutMapping("user/{id}")
	public String updateUser(@PathVariable("id") Long id,@RequestBody UserInfo newUser) {
		UserInfo userDB=userRepository.getReferenceById(id);
		String encodedPassword = passwordEncoder.encode(newUser.getPassword());
		String newPassword=encodedPassword;
		String newPhoneNumber=newUser.getPhoneNumber();
		String newAdress=newUser.getAdress();
		userRepository.updateUserInfo(newPassword,newPhoneNumber,newAdress,id);
		return "User updated succesfully";
	}
    //----------------------------------------------------------------------------------
	//Send password to user by given email
	@GetMapping("user/forgottenPassword/{email}") 
	public String sendPasswordByEmail(@PathVariable("email") String email) {
		UserInfo user=userRepository.getByUsernameOrEmail(email);
		if(user==null) {
			return "Email does not exist";
		}else {
			String password = new String(Base64.decodeBase64(user.getPassword()));
			senderService.sendEmail(email, "Login Password", 
					"Your Password is: "+password);
			return "Password sent to given email";
			
		}
	}
}