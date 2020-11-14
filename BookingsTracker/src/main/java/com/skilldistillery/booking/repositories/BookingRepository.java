import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.booking.entities.Booking;

public interface BookingRepository extends JpaRepository<Booking, Integer> {

}
