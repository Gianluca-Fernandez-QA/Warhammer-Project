package com.qa.demo.repo;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.qa.demo.Entities.ArmyBuild;
import com.qa.demo.Entities.Usermain;

@Repository
public interface ArmyRepo extends JpaRepository<ArmyBuild, Long> {
	@Query(value = "SELECT aname,content FROM army_build where id = :a", nativeQuery = true)     
	public List<Object> findByUserId(@Param("a")Long a);
}
