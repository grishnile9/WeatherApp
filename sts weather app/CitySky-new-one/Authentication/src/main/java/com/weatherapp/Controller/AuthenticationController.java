package com.weatherapp.Controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.weatherapp.Config.JwtTokenGen;
import com.weatherapp.Exception.UserNotFoundException;
import com.weatherapp.Model.AuthUser;
import com.weatherapp.Service.AuthService;

@RestController
@CrossOrigin("*")
public class AuthenticationController {
	
	
	 @Autowired
	    AuthService authService;
	 
@PostMapping("/login")
 public ResponseEntity<?> loginUser(@RequestBody AuthUser authUser){
	        try{
	            if (authUser.getEmail() == null || authUser.getPassword() == null) {
	                throw new UserNotFoundException(" email and password are null");
	            }
	            boolean result=authService.getAuthenticUser(authUser.getEmail(), authUser.getPassword());
	            if(result)
	            {
	                Map<String, String> token= new JwtTokenGen().generateToken(authUser);
	                return new ResponseEntity<Map>(token,HttpStatus.OK);
	            }else if (result == false) {
	                throw new UserNotFoundException("Email / password mismatch");
	            }
	        }
	        catch (UserNotFoundException e){
	            System.out.println(e.getMessage());
	            return new ResponseEntity("Invalid user",HttpStatus.UNAUTHORIZED);
	        }
	        return null;
	    }

	
}
