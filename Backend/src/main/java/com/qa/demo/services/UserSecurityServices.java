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
	System.out.println(Repo.login(uName));
	List<UserSecurity> a = Repo.login(uName);
	String pass = a.get(0).getPassword();
	if(uPass.equals(pass)) {
		System.out.println("hello");
	return true;
	}else {
		System.out.println("Hello");
	return false;
	}
}
public boolean delete(String uName, String uPass) {
	List<Usermain> a = Repa.delete(uName);
	Repa.deleteById(a.get(0).getId());
	Repo.deleteById(uName);
	return true;
	
	}
}

