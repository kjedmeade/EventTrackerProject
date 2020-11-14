package com.skilldistillery.booking.services;

import java.util.List;

import com.skilldistillery.booking.entities.Booking;

public interface BookingService {

	List<Booking>  listAllBookings();

	Booking findBookingById(int id);

	Booking updateBooking(int id, Booking booking);

	boolean deleteBooking(int id);

	Booking createNewBooking(Booking booking);

}
