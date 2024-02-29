package com.wishlist.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
//@Table(name="wish")
public class WishListCity {
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private Long wishlistid;
    private String email;
    private Long id;
    private Long visibility;
    private String name;
    public WishListCity() {
    }
	public WishListCity(Long wishlistid, String email, Long id, Long visibility, String name) {
		this.wishlistid = wishlistid;
		this.email = email;
		this.id = id;
		this.visibility = visibility;
		this.name = name;
	}
	public Long getWishlistid() {
		return wishlistid;
	}
	public void setWishlistid(Long wishlistid) {
		this.wishlistid = wishlistid;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Long getVisibility() {
		return visibility;
	}
	public void setVisibility(Long visibility) {
		this.visibility = visibility;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
}