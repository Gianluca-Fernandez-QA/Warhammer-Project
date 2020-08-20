package com.qa.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.qa.demo.Entities.ArmyBuild;
import com.qa.demo.Entities.Usermain;
import com.qa.demo.repo.ArmyRepo;
@Service
public class ArmyServices {
@Autowired
ArmyRepo arm;

public String armCrt(ArmyBuild a) {
	arm.save(a);
	return "ARMY SAVED";
}
public List<Object> ArmyFind(Long a){
	return  arm.findByUserId(a);

}
}
