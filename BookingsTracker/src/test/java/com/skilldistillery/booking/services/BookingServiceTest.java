package com.skilldistillery.booking.services;

import static org.junit.jupiter.api.Assertions.*;

import java.util.Optional;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.skilldistillery.booking.entities.Booking;
import com.skilldistillery.booking.repositories.BookingRepository;
@SpringBootTest
class BookingServiceTest {

	@Autowired
	private BookingService bkServ;
	
	@Test
	@DisplayName("find by Id")
	void test1() {
		Booking booking = bkServ.findBookingById(1);
		assertEquals("Craig", booking.getFirstName());
		}
}
