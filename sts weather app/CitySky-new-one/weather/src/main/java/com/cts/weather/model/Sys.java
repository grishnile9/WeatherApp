package com.cts.weather.model;

import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
//@NoArgsConstructor
//@AllArgsConstructor
public class Sys {
	
	private double sunrise;
	private double sunset;
	public Sys(double sunrise, double sunset) {
		
		this.sunrise = sunrise;
		this.sunset = sunset;
	}
	 public Sys(){
	    	
	    }
	public double getSunrise() {
		return sunrise;
	}
	public void setSunrise(double sunrise) {
		this.sunrise = sunrise;
	}
	public double getSunset() {
		return sunset;
	}
	public void setSunset(double sunset) {
		this.sunset = sunset;
	}

}
