package com.skilldistillery.booking.entities;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

public class BookingTest {

	private static EntityManagerFactory emf;
	private EntityManager em;
	private Booking booking;
	
	@BeforeAll
	static void setUpBeforeClass() throws Exception {
		emf = Persistence.createEntityManagerFactory("BookingPU");
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
		emf.close();
	}

	@BeforeEach
	void setUp() throws Exception {
		em = emf.createEntityManager();
		booking = em.find(Booking.class, 1);

	}

	@AfterEach
	void tearDown() throws Exception {
		em.close();
		booking = null;
	}

	@Test
	@DisplayName("test for mapping booking entity")
	void test1() {
		assertNotNull(booking);
		assertEquals("Craig", booking.getFirstName());
		assertEquals("Martin", booking.getLastName());
		assertEquals("j.craig@yahoo.com", booking.getEmail());
		assertEquals("Portrait", booking.getPhotoType());
		assertEquals("San Diego, CA", booking.getLocation());
		assertEquals(2, booking.getDuration());
		assertEquals(2021, booking.getDate().getYear());
		assertEquals(1, booking.getDate().getMonthValue());
		assertEquals(11, booking.getDate().getDayOfMonth());
		assertEquals("Booked family portrait session", booking.getNotes());
	}
	

}
