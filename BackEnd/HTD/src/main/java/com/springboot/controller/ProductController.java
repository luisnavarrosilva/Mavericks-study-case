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

import com.springboot.model.Product;
import com.springboot.repository.ProductRepository;

@CrossOrigin
@RestController
public class ProductController {

	@Autowired
	private ProductRepository productRepository;
	
    //----------------------------------------------------------------------------------
	//add a new product to the db
	@PostMapping("/product")
	public String addProduct(@RequestBody Product product) {
		productRepository.save(product);
		return "Product added succesfully";
	}
	
    //----------------------------------------------------------------------------------
	//fetch all product from the db
	@GetMapping("/product")
	public List<Product> fetchAllProducts(){
		return productRepository.findAll();
	}
	
    //----------------------------------------------------------------------------------
	//fetch available products from the db
	@GetMapping("/product/available")
	public List<Product> fetchAvailableProducts(){
		return productRepository.getByStatus("available");
	}
	
    //----------------------------------------------------------------------------------
	//update product based on name
		@PutMapping("product/{name}")
		public String updateProduct(@PathVariable String name,@RequestBody Product newProduct) {
			Product productDB=productRepository.getByName(name);
			
			productDB.setName(newProduct.getName());
			productDB.setDescription(newProduct.getDescription());
			productDB.setPrice(newProduct.getPrice());
			productDB.setStatus(newProduct.getStatus());
			productDB.setStock(newProduct.getStock());
			productDB.setImage(newProduct.getImage());
			productRepository.save(productDB);
			
			return "Product updated succesfully";
		}
}
