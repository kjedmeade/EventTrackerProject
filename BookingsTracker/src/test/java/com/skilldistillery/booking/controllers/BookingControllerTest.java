package com.skilldistillery.booking.controllers;

import static org.junit.jupiter.api.Assertions.*;

import java.util.Optional;

import javax.servlet.http.HttpServletResponse;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.skilldistillery.booking.entities.Booking;
import com.skilldistillery.booking.repositories.BookingRepository;
@SpringBootTest
class BookingControllerTest {

	@Autowired
	private BookingController bController;
	
	@Test
	@DisplayName("find by Id")
	void test1() {
		HttpServletResponse response = null;
		Booking booking = bController.listBookingById(1, response);
		assertEquals("Craig", booking.getFirstName());
		}
}
