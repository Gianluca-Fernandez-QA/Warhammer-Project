package com.qa.demo.repo;

import java.sql.Statement;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.qa.demo.Entities.USER;
import com.qa.demo.Entities.UserSecurity;
import com.qa.demo.Entities.Usermain;

@Repository
public interface UserSecurityRepo extends JpaRepository<UserSecurity, String> {

	@Query(value = "select * from user_security WHERE username=:a", nativeQuery = true)    
	public List<UserSecurity> login(@Param("a")String a);
	
	
	

}
