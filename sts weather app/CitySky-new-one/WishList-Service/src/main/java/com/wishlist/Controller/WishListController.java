package com.wishlist.Controller;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wishlist.Exception.WishListAlreadyExists;
import com.wishlist.Exception.WishListNotFoundException;
import com.wishlist.Model.WishListCity;
import com.wishlist.Service.WishListService;

@RestController
@RequestMapping("/wishlistcity")
public class WishListController {
	
	@Autowired
	WishListService wishlistService;
	
    @GetMapping("/getWishList/{email}")
    public ResponseEntity<?> getCityById(@PathVariable("email") String email){
        return new ResponseEntity<>(wishlistService.getAllWishListCity(email), HttpStatus.OK);
    }
    
    @PostMapping("/addWishList/{email}")
    public ResponseEntity<?> addWishListCity(@RequestBody WishListCity wishlistCity,@PathVariable("email") String email){
    	wishlistCity.setEmail(email);
        try{
        	wishlistService.addWishListCity(wishlistCity);
            return new ResponseEntity<>(wishlistCity,HttpStatus.OK);
        }
        catch (WishListAlreadyExists e){
            return new ResponseEntity<>(e.getMessage(),HttpStatus.CONFLICT);
        }
    }
    
    @DeleteMapping("/deleteWishlist/{wishlistid}")
	public ResponseEntity<String> deleteWishlist(@PathVariable long wishlistid)
	{
		return new ResponseEntity<>(wishlistService.deleteWishlist(wishlistid), HttpStatus.OK);
	}
//    @DeleteMapping("/deleteWishList/{email}/{name}")
//    public ResponseEntity<?> deleteWishListCity(@PathVariable("email") String email,@PathVariable("name") String name){
//        try{
//            wishlistService.deleteCity(email,name);
//            return new ResponseEntity<>("City Deleted Successfully",HttpStatus.OK);
//        }
//        catch (WishListNotFoundException e){
//            return new ResponseEntity<>(e.getMessage(),HttpStatus.CONFLICT);
//        }
    }

