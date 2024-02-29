package com.cts.weather.service;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.cts.weather.model.Weather;


@Service
public class WeatherService {
	
	
	//add your api key here  
		private static final String API_KEY = "ccf3f3ea8acfb4b195e107bd15cd5010";    
		//add the base api url here   
		private static final String API_URL = "https://api.openweathermap.org/data/2.5/weather";  
		private final RestTemplate restTemplate;  
	public WeatherService(RestTemplate restTemplate) 
		{        
			this.restTemplate = restTemplate;  
			}    //using rest template, get the weather details of a city   
		public Weather getWeather(String city) {  
			Weather weatherData = restTemplate.getForObject(API_URL+"?q="+city+"&appid="+API_KEY,Weather.class); 
			return weatherData;   
			}
	
		
		
		}



