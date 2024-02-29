package com.cts.weather.model;



import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
public class Weather {
	
	private Main main;
	private Wind wind;
	private Coord coord;
	private Sys sys;
	private Long id;
	private String name;
	private Long visibility;
	public Weather(Main main, Wind wind, Coord coord, Sys sys, Long id, String name, Long visibility) {
		this.main = main;
		this.wind = wind;
		this.coord = coord;
		this.sys = sys;
		this.id = id;
		this.name = name;
		this.visibility = visibility;
	}
	 public Weather(){
	    	
	    }
	public Main getMain() {
		return main;
	}
	public void setMain(Main main) {
		this.main = main;
	}
	public Wind getWind() {
		return wind;
	}
	public void setWind(Wind wind) {
		this.wind = wind;
	}
	public Coord getCoord() {
		return coord;
	}
	public void setCoord(Coord coord) {
		this.coord = coord;
	}
	public Sys getSys() {
		return sys;
	}
	public void setSys(Sys sys) {
		this.sys = sys;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Long getVisibility() {
		return visibility;
	}
	public void setVisibility(Long visibility) {
		this.visibility = visibility;
	}

}
