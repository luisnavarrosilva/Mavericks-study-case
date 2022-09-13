package com.springboot.controller;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.tomcat.util.codec.binary.Base64;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
	private EmailSenderService senderService;
	
    //----------------------------------------------------------------------------------
	//add a new user to the db
	@PostMapping("/user") 
	public ResponseEntity<?> addUser(@RequestBody UserInfo user) {
		//We create de response that we will return
		Map<String, Object> response =new HashMap<>();
		try {
			//Check if the user already exist in the db
			UserInfo u=userRepository.getByUsernameOrEmail(user.getUserName(),user.getEmail());
			if(u==null) {
				//Save UserInfo in DB
				userRepository.save(user);
				response.put("Message","User created succesfully");
				return new ResponseEntity<Map<String,Object>>(response,HttpStatus.OK);

			}else {
				response.put("Message","This username/email already exist");
				return new ResponseEntity<Map<String,Object>>(response,HttpStatus.BAD_REQUEST);
			}
		}catch(DataAccessException e){
			response.put("Message", "User can not be created");
			response.put("Error",e.getMostSpecificCause().getMessage());
			return new ResponseEntity<Map<String,Object>>(response,HttpStatus.INTERNAL_SERVER_ERROR);
		}
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
	public ResponseEntity<?> fetchUser(@PathVariable("user") String userName) {
		Map<String, Object> response =new HashMap<>();
		UserInfo user=userRepository.getByUsernameOrEmail(userName);
		try {
			if(user!=null) {
				return new ResponseEntity<UserInfo>(user,HttpStatus.OK);
			}else {
				response.put("Message","No se encontro el usuario");
				return new ResponseEntity<Map<String,Object>>(response,HttpStatus.NOT_FOUND);
			}
		}catch(DataAccessException e){
			response.put("Message", "User can not be created");
			response.put("Error",e.getMostSpecificCause().getMessage());
			return new ResponseEntity<Map<String,Object>>(response,HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
		 
	}
    //----------------------------------------------------------------------------------
	//update user based on id 
	@PutMapping("user/{id}")
	public String updateUser(@PathVariable("id") Long id,@RequestBody UserInfo newUser) {
		String encodedPassword = newUser.getPassword();
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
			senderService.sendEmail(email, "Login Password", 
					"Your Password is: "+user.getPassword());
			return "Password sent to given email";
			
		}
	}
}