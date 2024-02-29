package com.wishlist.Config;

import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import com.wishlist.Filter.JwtTokenFilter;


@Configuration
public class FilterConfig {
	@Bean
	public FilterRegistrationBean jwtWishListFilter() {

		FilterRegistrationBean filter = new FilterRegistrationBean();
		filter.setFilter(new JwtTokenFilter());

		filter.addUrlPatterns("/wishlistcity/*");

		return filter;
}
}

