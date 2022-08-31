package com.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springboot.model.Orders;

public interface OrdersRepository extends JpaRepository<Orders, Long>{

}
