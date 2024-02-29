package com.wishlist.Repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.wishlist.Model.WishListCity;

@Repository
public interface WishListRepository extends JpaRepository<WishListCity,Long> {
	List<WishListCity> findByEmail(String email);
//    Optional deleteByEmailAndName(String email, String name);
    Optional<WishListCity> findByEmailAndName(String email, String name);

}
