package com.weatherapp;

import org.springframework.boot.SpringApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;

import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@EnableDiscoveryClient
@OpenAPIDefinition
public class UserProfileNewOneApplication {

	public static void main(String[] args) {
		SpringApplication.run(UserProfileNewOneApplication.class, args);
	}

}
