package com.qa.demo.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.qa.demo.Entities.Usermain;
@Repository
public interface UserMainRepo extends JpaRepository<Usermain, Long> {
	
	@Query(value = "SELECT * FROM usermain where user_name = :a", nativeQuery = true)     
	public List<Usermain> find(@Param("a")String a);
	
	@Query(value = "SELECT * FROM usermain where user_name = :a", nativeQuery = true)     
	public Usermain ArmyCreate(@Param("a")String a);
}
