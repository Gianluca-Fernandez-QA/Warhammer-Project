package com.example.demo.controllers;

import static org.junit.Assert.assertEquals;

import org.junit.Before;
import org.junit.Test;
import org.junit.jupiter.api.Assertions;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.ResultMatcher;
import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.qa.demo.Entities.USER;
import com.qa.demo.Entities.UserSecurity;
import com.qa.demo.Entities.Usermain;
import com.qa.demo.repo.UserMainRepo;
import com.qa.demo.repo.UserSecurityRepo;
import com.qa.demo.services.UserMainServices;
import com.qa.demo.services.UserSecurityServices;

@RunWith(SpringRunner.class)
@SpringBootTest
@ContextConfiguration
@AutoConfigureMockMvc
public class UserControllerTest {
	@MockBean
	UserSecurityServices usrSS;
	@MockBean
	UserMainServices usrMS;
	@MockBean
	UserMainRepo mRepo;
	@MockBean
	UserSecurityRepo sRepo;
	UserSecurity a = new UserSecurity("Barry", "pass");
	Usermain b = new Usermain("barry", "Barry@barry.com", true, a);

	    @Test
	public void testCreateUser() throws JsonProcessingException {
		Mockito.when(this.usrSS.newUser(a)).thenReturn("User Security Created");

        assertEquals("User Security Created", this.usrSS.newUser(a));
	}
}
