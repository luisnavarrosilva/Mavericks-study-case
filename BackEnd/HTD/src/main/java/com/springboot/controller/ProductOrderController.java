package com.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.model.Orders;
import com.springboot.model.Product;
import com.springboot.model.ProductOrder;
import com.springboot.repository.OrdersRepository;
import com.springboot.repository.ProductOrderRepository;
import com.springboot.repository.ProductRepository;

@CrossOrigin
@RestController
public class ProductOrderController {

	@Autowired
	ProductRepository productRepository;
	@Autowired
	OrdersRepository ordersRepository;
	@Autowired
	ProductOrderRepository productOrderRepository;
	
	//----------------------------------------------------------------------------------
	//Add a product to an order
	@PostMapping("/order/product/{oid}/{pid}")
	public ProductOrder addProductToOrder(@RequestBody ProductOrder productOrder,
			@PathVariable("oid") Long oid,
			@PathVariable("pid") Long pid) { 
		//fetch order from db
		Orders order=ordersRepository.getReferenceById(oid);
		//fetch product from db
		Product product=productRepository.getReferenceById(pid);
		
		//set order and product to the db
		productOrder.setOrder(order);
		productOrder.setProduct(product);
		
		return productOrderRepository.save(productOrder);
	}
	
	//----------------------------------------------------------------------------------
	//fetch all products based on order id
	@GetMapping("/order/product/{oid}")
	public List<Product> getProductsByOrderId(@PathVariable("oid") Long oid ){
		return productOrderRepository.getProductById(oid); 
	}
}
