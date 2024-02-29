package com.cts.weather.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import com.cts.weather.model.Weather;
import com.cts.weather.service.WeatherService;

@RestController
@RequestMapping("/api")
public class WeatherController {
	
  WeatherService weatherService;
    @Autowired
    public WeatherController(WeatherService weatherService) {
        this.weatherService = weatherService;
    }

    //create a method to get the weather of a city
    @GetMapping("/weather/{city}")
    public Weather getWeather(@PathVariable String city) {
        return weatherService.getWeather(city);
    }
}

