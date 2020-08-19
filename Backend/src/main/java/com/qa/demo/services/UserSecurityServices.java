package com.qa.demo.services;

import java.io.Console;
import java.util.List;

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

public boolean login(String uName, String uPass) {
	System.out.println(uName);
	System.out.println(Repo.login(uName));
	List<UserSecurity> a = Repo.login(uName);
	String pass = a.get(0).getPassword();
	if(uPass == pass) {
	return true;
	}else {
	return false;
	}
}
}
