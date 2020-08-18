package com.qa.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.qa.demo.Entities.Usermain;
@Repository
public interface UserMainRepo extends JpaRepository<Usermain, Long> {
	

}
