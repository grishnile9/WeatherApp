package com.wishlist.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wishlist.Exception.WishListAlreadyExists;
import com.wishlist.Exception.WishListNotFoundException;
import com.wishlist.Model.WishListCity;
import com.wishlist.Repository.WishListRepository;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class WishListServiceImpl implements WishListService {
	
	@Autowired
	WishListRepository wishlistRepository;
    @Override
    public WishListCity addWishListCity(WishListCity wishlistCity) throws WishListAlreadyExists {
        Optional<WishListCity> existingProduct = wishlistRepository
                .findByEmailAndName(wishlistCity.getEmail(),wishlistCity.getName());
        if (existingProduct.isPresent()) {
            throw new WishListAlreadyExists("City already exist");
        }
        else {
            wishlistRepository.save(wishlistCity);
            return wishlistCity;
        }
    }
    @Override
    public List<WishListCity> getAllWishListCity(String email){
        List<WishListCity> allCities = wishlistRepository.findByEmail(email);
        return allCities;
    }
    
    @Override
	public String deleteWishlist(long wishlistid) {
		// TODO Auto-generated method stub
		wishlistRepository.deleteById(wishlistid);
		return "Wishlist Deleted";
	}
    
    
    
//    @Override
//    public String deleteCity(String email, String name) throws WishListNotFoundException {
//        Optional<WishListCity> existingProduct = wishlistRepository.findByEmailAndName(email,name);
//        if (existingProduct.isPresent()){
//            wishlistRepository.deleteByEmailAndName(email,name);
//            return "City Deleted";
//        }else
//            throw new WishListNotFoundException("City Not Found");
//    }
	
//	private final WishListRepository wishlistRepository;
//	
//	@Autowired
//	public WishListServiceImpl(WishListRepository wishlistRepository) {
//		this.wishlistRepository=wishlistRepository;
//	}
// 
//	@Override
//    public WishListCity add(WishListCity wishlistcity) throws WishListAlreadyExists {
//		if (wishlistRepository.existsById(wishlistcity.getWishlistId())) {
//			throw new WishListAlreadyExists("User with ID " + wishlistcity.getWishlistId() + " already exists.");
//		}
//		
//		 wishlistRepository.save(wishlistcity);
//		 return wishlistcity;
// 
//	}
// 
//	@Override
//	public List<WishListCity> getAll() {
//		 return wishlistRepository.findAll();
//	}
// 
//	 @Override
//	    public WishListCity getWishListById(Long WishlistId) throws WishListNotFoundException {
//	        return wishlistRepository.findById(WishlistId)
//	                .orElseThrow(() -> new WishListNotFoundException("WishListCity with ID " + WishlistId + " not found"));
//	    }
// 
// 
//	 @Override
//	    public WishListCity deleteById(Long WishlistId) throws WishListNotFoundException {
//		 WishListCity wishlistToDelete = getWishListById(WishlistId);
//	        wishlistRepository.delete(wishlistToDelete);
//	        return wishlistToDelete;
//	    }

}
