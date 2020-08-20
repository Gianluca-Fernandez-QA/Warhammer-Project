package com.qa.demo.Entities;

public class USER {
	private String id;
	private String UserName;
	private String Password;
	private String name;
	private String email;
	private boolean UserPublic;
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getUserName() {
		return UserName;
	}
	public void setUserName(String userName) {
		UserName = userName;
	}
	public String getPassword() {
		return Password;
	}
	public void setPassword(String password) {
		Password = password;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public boolean isUserPublic() {
		return UserPublic;
	}
	public void setUserPublic(boolean userPublic) {
		UserPublic = userPublic;
	}
	
}
