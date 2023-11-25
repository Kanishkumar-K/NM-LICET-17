package com.mobeaze.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mobeaze.modal.OrderItem;

public interface OrderItemRepository extends JpaRepository<OrderItem, Long> {

}
