package com.springboot;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.springboot.Services.MyUserDetailsService;

@SuppressWarnings("deprecation")
@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter{

	@Autowired
	private MyUserDetailsService myUserDetailsService;
	
	@Bean
	public PasswordEncoder getPasswordEncoder() {
		PasswordEncoder passEncoder = new BCryptPasswordEncoder();
		return passEncoder;
	}
	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		
		//The data comes from the db
		auth.authenticationProvider(myAuthManager());
		
	}
	private DaoAuthenticationProvider myAuthManager() {

		DaoAuthenticationProvider authProvider = 
				new DaoAuthenticationProvider();
		authProvider.setUserDetailsService(myUserDetailsService);
		authProvider.setPasswordEncoder(getPasswordEncoder());
		return authProvider;
	}
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.httpBasic()
		.and()
		.authorizeRequests()
		.antMatchers(HttpMethod.GET,"/login/{user}").authenticated()
		.anyRequest().permitAll()
		.and()
		.csrf().disable();
		
		/**
		 * http.httpBasic()
		.and()
		.authorizeRequests()
		.antMatchers(HttpMethod.GET,"/hello").permitAll()
		.antMatchers(HttpMethod.POST,"/user/register").permitAll()
		.antMatchers(HttpMethod.GET,"/user/login").authenticated()
		.antMatchers(HttpMethod.GET, "/user/question/{username}").permitAll()
		.antMatchers(HttpMethod.GET, "/user/answer/{username}/{answer}").permitAll()
		.antMatchers(HttpMethod.POST, "/vendor/add}").permitAll()
		.antMatchers(HttpMethod.GET, "/vendor").permitAll()
		.antMatchers(HttpMethod.GET, "/vendor/{id}").permitAll()
		.and()
		.csrf().disable();
		 * **/
	}
	
}
