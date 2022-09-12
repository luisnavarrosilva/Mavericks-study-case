package com.springboot.Services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.springboot.model.UserInfo;
import com.springboot.repository.UserRepository;

@Service
public class MyUserDetailsService implements UserDetailsService{
	
	@Autowired
	UserRepository userRepository;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		UserInfo userInfo=userRepository.getByUsernameOrEmail(username);
		String role =userInfo.getAccountType();
		List<GrantedAuthority> list=new ArrayList<>();
		SimpleGrantedAuthority sga=new SimpleGrantedAuthority(role);
		list.add(sga);
		UserDetails user=
				new User(userInfo.getUserName(),userInfo.getPassword(),list);
		return user;
	}
	

}
