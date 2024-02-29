package com.weatherapp.Service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.weatherapp.Exception.UserNotFoundException;
import com.weatherapp.Model.AuthUser;
import com.weatherapp.Repository.AuthRepository;

@Service
public class AuthServiceImpl implements AuthService{
	
	@Autowired
    AuthRepository authRepository;
    @Override
    public boolean getAuthenticUser(String email, String password) throws UserNotFoundException {
        Optional<AuthUser> optUserInfo=	authRepository.findByEmailAndPassword(email, password);
        if(optUserInfo.isPresent())
            return true;
        else
            throw new UserNotFoundException("User Not Found");
    }
}