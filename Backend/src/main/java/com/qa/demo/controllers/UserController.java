package com.qa.demo.controllers;

import java.io.Console;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.qa.demo.Entities.USER;
import com.qa.demo.Entities.UserSecurity;
import com.qa.demo.Entities.Usermain;
import com.qa.demo.services.UserMainServices;
import com.qa.demo.services.UserSecurityServices;

@CrossOrigin
@RestController
public class UserController {
	
	@Autowired
	UserSecurityServices usrSS;
	@Autowired
	UserMainServices usrMS;
@PostMapping("/UserCreation")
public String  usrCreate(@RequestBody USER a) {
	UserSecurity users = new UserSecurity(a.getUserName(), a.getPassword());
	Usermain user = new Usermain(a.getName(), a.getEmail(), a.isUserPublic(),users); 
	return usrSS.newUser(users)+ " "+ usrMS.newUser(user);
}
@PostMapping("/UserLogin")
public String usrLogin(@RequestBody UserSecurity a) {
	
	return usrSS.login(a.getUsername(), a.getPassword());
	
}
}
