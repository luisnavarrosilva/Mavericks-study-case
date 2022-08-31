package com.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springboot.model.Orders;
import com.springboot.model.ProductOrder;

public interface ProductOrderRepository extends JpaRepository<ProductOrder, Long>{

}
