package com.skilldistillery.booking.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.booking.entities.Booking;
import com.skilldistillery.booking.repositories.BookingRepository;

@Service
public class BookingServiceImpl implements BookingService {
		
		@Autowired 
		BookingRepository repo;
		

		@Override
		public List<Booking> listAllBookings() {
			return repo.findAll();
		}
		@Override
		public Booking findBookingById(int id) {
			Optional<Booking> bookingOpt = repo.findById(id);
			if (bookingOpt.isPresent()) {
				Booking booking = bookingOpt.get();
				return booking;
			}
			return null;
			 
		}
	
		@Override
		public Booking createNewBooking(Booking booking) {

			repo.saveAndFlush(booking);

			return booking;
		}

		@Override
		public Booking updateBooking(int id, Booking booking) {
			Optional<Booking> bookingOpt =repo.findById(id);
			Booking bookingToUpdate = null;
			if (bookingOpt.isPresent()) {
				bookingToUpdate=bookingOpt.get();
				if(booking.getFirstName() !=null) {bookingToUpdate.setFirstName(booking.getFirstName());}
				if(booking.getLastName() !=null) {bookingToUpdate.setLastName(booking.getLastName());}
				if(booking.getEmail() !=null) {bookingToUpdate.setEmail(booking.getEmail());}
				if(booking.getPhotoType() != null ) {bookingToUpdate.setPhotoType(booking.getPhotoType());}
				if(booking.getLocation() !=null) {bookingToUpdate.setLocation(booking.getLocation());}
				if(booking.getDuration() != 0) {bookingToUpdate.setDuration(booking.getDuration());}
				if(booking.getNotes() !=null) {bookingToUpdate.setNotes(booking.getNotes());}
//				
				repo.flush();
		}
			return bookingToUpdate;
		}
	
		@Override
		public boolean deleteBooking(int id){
			boolean deleted =false;
			Optional<Booking> bookingOpt= repo.findById(id);
		 if (bookingOpt.isPresent()) {
			 Booking booking = bookingOpt.get();
			 repo.deleteById(id);
			 deleted= true;
		 }
		 return deleted;
			}
		
	
	
}


