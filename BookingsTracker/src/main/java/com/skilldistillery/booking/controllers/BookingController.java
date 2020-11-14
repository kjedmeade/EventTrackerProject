import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.booking.entities.Booking;
import com.skilldistillery.booking.services.BookingService;

	@RequestMapping("api")
	@RestController
	public class BookingController {
		
		@Autowired
		private BookingService pBServ;
		
		
		@GetMapping("bookings/")
		public List<Booking> listAllBookings(HttpServletResponse response) {
			List<Booking> bookings = pBServ.listAllBookings();
			if (bookings == null) {
				response.setStatus(404);
			}
			return bookings;
		}
		
		@GetMapping("bookings/{id}")
		public Booking listBookingById(Integer id, HttpServletResponse response) {
			Booking booking  = pBServ.findBookingById(id);
			if (booking == null) {
				response.setStatus(404);
			}
			return booking;
		}
		
		@PostMapping("bookings")
		public Booking createNewBooking(@RequestBody Booking booking, HttpServletResponse response, HttpServletRequest request) {
			booking = pBServ.createNewBooking(booking);
			if (booking == null) {
				response.setStatus(404);
			}
			else {
				response.setStatus(201);
			StringBuffer url = request.getRequestURL();
			url.append("/").append(booking.getId());
			response.setHeader("Location", url.toString());
			
			}
			return booking;
		}
		
		@PutMapping("posts/{id}")
		public Booking updatePost(@RequestBody Booking booking, @PathVariable int id, HttpServletResponse response) {
			booking = pBServ.updateBooking(id, booking);
			try {
				if (booking == null) {

					response.setStatus(404);
				} 
			} catch (Exception e) {
				// TODO: handle exception
				response.setStatus(400);
				booking =null;
			}
			return booking;
		}
		@DeleteMapping("bookings/{id}")
		public void deleteBooking(@PathVariable Integer id, HttpServletResponse response) {
			try {
				
			boolean deleted =pBServ.deleteBooking(id);
			if (deleted) {
				response.setStatus(204);
			}
			else {
				response.setStatus(404);
			}
			} catch (Exception e) {
				// TODO: handle exception
				response.setStatus(400);
			}
		
		}
		
		
	}

