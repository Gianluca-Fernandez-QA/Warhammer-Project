package com.qa.demo.services;

import java.io.Console;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.qa.demo.Entities.USER;
import com.qa.demo.Entities.UserSecurity;
import com.qa.demo.Entities.Usermain;
import com.qa.demo.repo.UserMainRepo;
import com.qa.demo.repo.UserSecurityRepo;

@Service
public class UserSecurityServices {
@Autowired
UserSecurityRepo Repo;
@Autowired
UserMainRepo Repa;
public String newUser(UserSecurity u) {
	Repo.save(u);
	return "User Security Created";
}

public boolean login(String uName, String uPass) {
	UserSecurity a = Repo.login(uName);
	String pass = a.getPassword();
	if(uPass.equals(pass)) {
	return true;
	}else {
	return false;
	}
}
public boolean delete(String uName, String uPass) {
	List<Usermain> a = Repa.find(uName);
	Repa.deleteById(a.get(0).getId());
	Repo.deleteById(uName);
	return true;
	
	}
}

