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
import com.springboot.model.Orders;
import com.springboot.model.UserInfo;
import com.springboot.repository.OrdersRepository;
import com.springboot.repository.UserRepository;

@CrossOrigin
@RestController
public class OrdersController {

	@Autowired
	private OrdersRepository ordersRepository;
	@Autowired
	private UserRepository userRepository;
	@Autowired
	private EmailSenderService senderService;
	
    //----------------------------------------------------------------------------------
	//Add a single order to the db
	@PostMapping("/orders/{uid}")
	public Orders addSingleOrder(@RequestBody Orders order, @PathVariable("uid") Long id) {
		UserInfo user=userRepository.getReferenceById(id);
		order.setUser(user);
		return ordersRepository.save(order);
	} 
	
    //----------------------------------------------------------------------------------
	//fetch all orders from db
	@GetMapping("/orders")
	public List<Orders> fetchAllOrders(){
		return ordersRepository.findAll(); 
	}
	
	 //----------------------------------------------------------------------------------
	//fetch all orders based on user id
	@GetMapping("/orders/user/{uid}")
	public List<Orders> fetchOrdersByUserId(@PathVariable("uid") Long uid){
		return ordersRepository.getByUserId(uid);
	}
    //----------------------------------------------------------------------------------
	//show all the orders based on status
	@GetMapping("/orders/{status}")
	public List<Orders> fetchOrdersByStatus(@PathVariable("status") String status){
		return ordersRepository.getByStatus(status);
		
	} 
    //----------------------------------------------------------------------------------
	//complete an order based on id
	@PutMapping("/orders/complete/{oid}") 
	public String completOrder(@PathVariable("oid") Long oid) {
		Orders order=ordersRepository.getReferenceById(oid);
		order.setStatus("completed");
		ordersRepository.save(order);
		UserInfo user=order.getUser();
		senderService.sendEmail(user.getEmail(), "New completed order", 
		"You have added a new order");
		return "Completed order succesfully";
			
	}
    //----------------------------------------------------------------------------------
	//Cancel an order based on id
		@PutMapping("/orders/cancel/{oid}") 
		public String cancelOrder(@PathVariable("oid") Long oid) {
			Orders order=ordersRepository.getReferenceById(oid);
			order.setStatus("pending");
			ordersRepository.save(order);
			UserInfo user=order.getUser();
			senderService.sendEmail(user.getEmail(), "Order cancellation", 
			"You have canceled an order succesfully");
			return "Cancellation succesfully";
				
		}
		
	
}
