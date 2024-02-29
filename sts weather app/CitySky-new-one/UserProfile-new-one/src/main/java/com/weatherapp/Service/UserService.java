package com.weatherapp.Service;

import java.util.Optional;

import com.weatherapp.Exception.UserAlreadyExistException;
import com.weatherapp.Exception.UserNotFoundException;
import com.weatherapp.Model.User;

public interface UserService {
	 User getUserById(Long userId);
	    User addUser(User user) throws UserAlreadyExistException;
	    User updateUser(User updatedUser, Long userId) throws UserNotFoundException;
	  String deleteUser(long id);
	    public Optional<User> getUserByEmail(String email);
}