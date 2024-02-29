package com.weatherapp.Service;

import com.weatherapp.Exception.UserNotFoundException;
import com.weatherapp.Model.AuthUser;
//import com.weatherapp.Model.AuthUser;

public interface AuthService {
	//AuthUser addAuthenticUser(AuthUser authUser);
	 boolean getAuthenticUser(String email,String password) throws UserNotFoundException;
	
}
