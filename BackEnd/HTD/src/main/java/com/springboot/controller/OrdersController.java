package com.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.model.Orders;
import com.springboot.model.User;
import com.springboot.repository.OrdersRepository;
import com.springboot.repository.UserRepository;

@RestController
public class OrdersController {

	@Autowired
	OrdersRepository ordersRepository;
	@Autowired
	UserRepository userRepository;
	
	//Add a single order to the db
	@PostMapping("/orders/{uid}")
	public Orders addSingleOrder(@RequestBody Orders order, @PathVariable("uid") Long id) {
		User user=userRepository.getReferenceById(id);
		order.setUser(user);
		return ordersRepository.save(order);
		
	} 
	//fetch all orders from db
	@GetMapping("/orders")
	public List<Orders> fetchAllOrders(){
		return ordersRepository.findAll();
	}
	//show all the orders based on status
	@GetMapping("/orders/{status}")
	public List<Orders> fetchOrdersByStatus(@PathVariable("status") String status){
		return ordersRepository.getByStatus(status);
		
	} 
}
