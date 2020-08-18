package com.qa.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.qa.demo.Entities.UserSecurity;

@Repository
public interface UserSecurityRepo extends JpaRepository<UserSecurity, String> {

}
