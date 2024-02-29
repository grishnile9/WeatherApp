package com.weatherapp.Service;

import java.util.Optional;

import org.apache.kafka.clients.admin.NewTopic;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.support.KafkaHeaders;
import org.springframework.messaging.Message;
import org.springframework.messaging.support.MessageBuilder;
import org.springframework.stereotype.Service;

import com.weatherapp.Exception.UserAlreadyExistException;
import com.weatherapp.Exception.UserNotFoundException;
import com.weatherapp.Model.User;
import com.weatherapp.Repository.UserRepository;

@Service
public class UserServiceImpl implements UserService{
	 @Autowired
	    UserRepository userRepository;
	 @Autowired
	    private KafkaTemplate<String,String> kafkaTemplate;
		    @Autowired
		    private NewTopic newTopic;
		    
		    
	    //get user by user Id from database
	    @Override
	    public User getUserById(Long userId) {
	        Optional<User> userDetails = userRepository.findById(userId);
	        if (userDetails.isPresent()){
	            return userDetails.get();
	        }
	        return null;
	    }
	    
	    @Override
	    public Optional<User> getUserByEmail(String email){
			Optional<User> user = userRepository.getUserByEmail(email);
			if (user.isEmpty()) {
				throw new UserNotFoundException("UserProfile not found with username: " + email);
			}
			return user;
	    }
	    
	    
	    //add the user details in database
	    @Override
	    public User addUser(User user) throws UserAlreadyExistException {
	        Optional<User> existingUser = userRepository.findById(user.getUserid());
	        if (existingUser.isPresent()) {
	            throw new UserAlreadyExistException("User already exist");
	        }
	        else {
	            userRepository.save(user);
	            Message<User> message = MessageBuilder
	                    .withPayload(user)
	                    .setHeader(KafkaHeaders.TOPIC,newTopic.name())
	                    .build();
	            kafkaTemplate.send(message);
	        }
	            
	            return user;
	            
	        
	    }
	    //update existing user in database
	    @Override
	    public User updateUser(User updatedUser, Long userId) throws UserNotFoundException {
	        Optional<User> user = userRepository.findById(userId);
	        if (user.isPresent()) {
	            User userUpdate = user.get();
	            userUpdate.setName(updatedUser.getName());
	            userUpdate.setPassword(updatedUser.getPassword());
	            userUpdate.setEmail(updatedUser.getEmail());
	            userUpdate.setCity(updatedUser.getCity());
	            return userRepository.save(userUpdate);
	        }
	        else {
	            throw new UserNotFoundException("User not found");
	        }   
	    }
	    @Override
		public String deleteUser(long id) {
			userRepository.deleteById(id);
			return "User Deleted";
		}
	}
 