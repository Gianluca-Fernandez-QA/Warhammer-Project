package com.qa.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.qa.demo.Entities.UserSecurity;
import com.qa.demo.Entities.Usermain;
import com.qa.demo.repo.UserMainRepo;
@Service
public class UserMainServices {
@Autowired
UserMainRepo Repo;

public String newUser(Usermain u) {
	Repo.save(u);
	return "User Main Info Created";
}
}
