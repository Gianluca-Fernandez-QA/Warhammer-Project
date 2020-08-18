package com.qa.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.qa.demo.Entities.UserSecurity;
import com.qa.demo.repo.UserSecurityRepo;

@Service
public class UserSecurityServices {
@Autowired
UserSecurityRepo Repo;

public String newUser(UserSecurity u) {
	Repo.save(u);
	return "User Security Created";
}
}
