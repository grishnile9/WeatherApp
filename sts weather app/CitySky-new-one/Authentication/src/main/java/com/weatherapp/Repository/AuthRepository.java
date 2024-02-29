package com.weatherapp.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.weatherapp.Model.AuthUser;

@Repository
public interface AuthRepository extends JpaRepository<AuthUser,String> {
    Optional<AuthUser> findByEmailAndPassword(String email, String pass);

}
