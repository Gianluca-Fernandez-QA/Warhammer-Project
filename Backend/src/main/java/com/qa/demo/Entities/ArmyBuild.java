package com.qa.demo.Entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
@Entity
public class ArmyBuild {
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	private long Aid;
	private String aname;
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "id")
	private Usermain user;
	@Lob 
	@Column(name="CONTENT", length=2000)
	private String content;
		
	public ArmyBuild() {

	}
	public ArmyBuild(Usermain user, String aname, String content) {
		this.user = user;
		this.content = content;
		this.aname = aname;
	}
	public long getAid() {
		return Aid;
	}
	public void setAid(long aid) {
		Aid = aid;
	}
	public Usermain getUser() {
		return user;
	}
	public void setUser(Usermain user) {
		this.user = user;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public String getAname() {
		return aname;
	}
	public void setAname(String aname) {
		this.aname = aname;
	}
	

	
	
	
	
}
