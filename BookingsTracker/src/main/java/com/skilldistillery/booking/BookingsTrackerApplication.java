package com.skilldistillery.booking;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

import com.skilldistillery.booking.entities.Booking;

@SpringBootApplication
public class BookingsTrackerApplication extends SpringBootServletInitializer {

	  @Override
	  protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
	    return application.sources(BookingsTrackerApplication.class);
	  }

	public static void main(String[] args) {
		SpringApplication.run(BookingsTrackerApplication.class, args);
	}

}
