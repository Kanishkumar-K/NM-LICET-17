package com.mobeaze.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mobeaze.modal.Address;

public interface AddressRepository extends JpaRepository<Address, Long> {

}
