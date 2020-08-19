package com.qa.demo.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.qa.demo.Entities.UserSecurity;

@Repository
public interface UserSecurityRepo extends JpaRepository<UserSecurity, String> {

	@Query(value = "select * from user_security WHERE username=:a", nativeQuery = true)     
	public List<UserSecurity> login(@Param("a")String a);
	
	@Query(value = "DELETE FROM user_security WHERE username=:a", nativeQuery = true)     
	public List<UserSecurity> delete(@Param("a")String a);

}
