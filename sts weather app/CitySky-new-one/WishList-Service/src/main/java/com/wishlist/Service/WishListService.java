package com.wishlist.Service;

import java.util.List;

import com.wishlist.Exception.WishListAlreadyExists;
import com.wishlist.Exception.WishListNotFoundException;
import com.wishlist.Model.WishListCity;

public interface WishListService {
	WishListCity addWishListCity(WishListCity wishlistCity) throws WishListAlreadyExists;
    List<WishListCity> getAllWishListCity(String email);
//    String deleteCity(String email,String name) throws WishListNotFoundException;
    String deleteWishlist(long wishlistid);
	

}
