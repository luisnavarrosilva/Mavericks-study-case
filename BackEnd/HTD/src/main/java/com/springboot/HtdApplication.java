package com.springboot;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;

import com.springboot.Services.EmailSenderService;

@SpringBootApplication(exclude = {SecurityAutoConfiguration.class})
public class HtdApplication {

	
	
	public static void main(String[] args) {
		SpringApplication.run(HtdApplication.class, args);
	}
	/*
	@Autowired
	EmailSenderService senderService;
	@EventListener(ApplicationReadyEvent.class)
	public void sendEmail() {
		senderService.sendEmail("tornero.navarro.alison@gmail.", "prueba", "email prueba");
	}

    */
}
