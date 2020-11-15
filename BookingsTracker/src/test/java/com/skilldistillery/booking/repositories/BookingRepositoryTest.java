package com.skilldistillery.booking.repositories;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.Locale.Category;
import java.util.Optional;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.skilldistillery.booking.entities.Booking;
@SpringBootTest
class BookingRepositoryTest {

	@Autowired
	private BookingRepository repo;
	
	@Test
	@DisplayName("find by Id")
	void test1() {
		Optional <Booking> bookingOpt = repo.findById(1);
		assertTrue(bookingOpt.isPresent());
		Booking booking = bookingOpt.get();
		assertEquals("Craig", booking.getFirstName());
		}
	

}
