package com.qa.demo.Entities;

public class ArmyBuilder {
private String userName;
private String password;
private String armyName;
private String armyBody;

public ArmyBuilder() {}
public ArmyBuilder(String userName, String password, String armyName, String armyBody) {
	super();
	this.userName = userName;
	this.password = password;
	this.armyName = armyName;
	this.armyBody = armyBody;
}
public String getUserName() {
	return userName;
}
public void setUserName(String userName) {
	this.userName = userName;
}
public String getPassword() {
	return password;
}
public void setPassword(String password) {
	this.password = password;
}
public String getArmyName() {
	return armyName;
}
public void setArmyName(String armyName) {
	this.armyName = armyName;
}
public String getArmyBody() {
	return armyBody;
}
public void setArmyBody(String armyBody) {
	this.armyBody = armyBody;
}

}
