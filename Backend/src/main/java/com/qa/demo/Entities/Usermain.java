package com.qa.demo.Entities;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
@Entity
public class Usermain {
	
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	private String name;
	private String email;
	private boolean UserPublic;
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "UserName")
	private UserSecurity user;
	
	
	public Usermain(String name, String email, boolean userPublic, UserSecurity user) {
		super();
		this.name = name;
		this.email = email;
		UserPublic = userPublic;
		this.user = user;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
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
	public UserSecurity getUser() {
		return user;
	}
	public void setUser(UserSecurity user) {
		this.user = user;
	}
	
}
