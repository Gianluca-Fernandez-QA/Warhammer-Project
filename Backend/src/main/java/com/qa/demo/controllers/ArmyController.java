package com.qa.demo.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.qa.demo.Entities.ArmyBuild;
import com.qa.demo.Entities.ArmyBuilder;
import com.qa.demo.Entities.UserSecurity;
import com.qa.demo.Entities.Usermain;
import com.qa.demo.repo.UserMainRepo;
import com.qa.demo.repo.UserSecurityRepo;
import com.qa.demo.services.ArmyServices;
import com.qa.demo.services.UserSecurityServices;


@CrossOrigin
@RestController
public class ArmyController {
	@Autowired
	UserSecurityServices usrSS;
	@Autowired 
	UserSecurityRepo usrMs;
	@Autowired
	UserMainRepo Repa;
	@Autowired
	ArmyServices armsv;
	
@PostMapping("/ArmyCreate")
public String usrCreate(@RequestBody ArmyBuilder a) {
	boolean av = usrSS.login(a.getUserName(), a.getPassword());
	if(av == true) {
		Usermain b = Repa.ArmyCreate(a.getUserName());
		
		ArmyBuild army = new ArmyBuild(b, a.getArmyName(),a.getArmyBody());
		return armsv.armCrt(army);
	}else {
		return "USER NOT LOGGED IN";
	}
}
@PostMapping("/ArmyRead")
public List<Object> armyRead(@RequestBody ArmyBuilder a){
	boolean av = usrSS.login(a.getUserName(), a.getPassword());

		List<Usermain> userId = Repa.find(a.getUserName());
		long id = userId.get(0).getId();
		
		return armsv.ArmyFind(id);
	
}
}
