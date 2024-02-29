package com.cts.weather.model;


import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
//@NoArgsConstructor
//@AllArgsConstructor
public class Wind {
	
	private double speed;
    private int deg;
    private double gust;
	public Wind(double speed, int deg, double gust) {
		this.speed = speed;
		this.deg = deg;
		this.gust = gust;
	}
	 public Wind(){
	    	
	    }
	public double getSpeed() {
		return speed;
	}
	public void setSpeed(double speed) {
		this.speed = speed;
	}
	public int getDeg() {
		return deg;
	}
	public void setDeg(int deg) {
		this.deg = deg;
	}
	public double getGust() {
		return gust;
	}
	public void setGust(double gust) {
		this.gust = gust;
	}


}
