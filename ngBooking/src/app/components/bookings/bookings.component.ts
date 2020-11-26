import { BookingService } from './../../services/booking.service';
import { Component, OnInit } from '@angular/core';
import { Booking } from 'src/app/models/booking';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {
  bookings: Booking[] =[];
  selected: Booking = null;
  newBooking: Booking = new Booking();



  constructor(
    private bServe: BookingService) { }

  ngOnInit(): void {
    this.loadBookings();
  }

  loadBookings(): void{
    this.bServe.index().subscribe(
      data=>{this.bookings=data;
      console.log('BookingListComponent.loadBooking(): bookings retrieved');
      },

      err=>{
        console.error('BookingListComponent.loadBooking(): retreive failed');
console.log(err);

      });

  }


  addBooking(addedBooking: Booking) {
    this.bServe.create(addedBooking).subscribe(
      data=>{this.loadBookings();
        console.log('BookingListComponent.loadBooking(): bookings retrieved');
        },

        err=>{
          console.error('BookingListComponent.loadBooking(): retreive failed');
  console.log(err);

        });
        this.newBooking = new Booking();
    }

  displayTodo(todo) {
    this.selected = todo;
  }

}
