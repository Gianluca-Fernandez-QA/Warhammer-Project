package com.qa.demo.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.qa.demo.Entities.UserSecurity;

@Repository
public interface UserSecurityRepo extends JpaRepository<UserSecurity, String> {

	@Query(value = "select * from user_security WHERE username='?1';", nativeQuery = true)
	public List<UserSecurity> login(String a);

}
