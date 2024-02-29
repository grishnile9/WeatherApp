package com.cts.weather.config;

import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;

import com.cts.weather.filter.JwtTokenFilter;
import org.springframework.context.annotation.Configuration;

@Configuration
public class FilterConfig {
	@Bean
	public FilterRegistrationBean jwtWishListFilter() {

		FilterRegistrationBean filter = new FilterRegistrationBean();
		filter.setFilter(new JwtTokenFilter());

		filter.addUrlPatterns("/api/*");

		return filter;
}
}