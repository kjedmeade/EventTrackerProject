import { Component, OnInit } from '@angular/core';
import { Booking } from 'src/app/models/booking';
import { BookingService } from 'src/app/services/booking.service';
@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {
  bookings: Booking[] =[];
  selected: Booking = null;
  newBooking: Booking = new Booking();
  updatedBooking: Booking = null;
  avgDuration: number =0;


  constructor(
    private bServe: BookingService) { }

  ngOnInit(): void {
    this.loadBookings();
    // this.averageDuration();
  }

  loadBookings(): void{
    this.bServe.index().subscribe(
      data=>{this.bookings=data;
      console.log('BookingListComponent.loadBooking(): bookings retrieved');
      this.averageDuration();},

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
        this.selected=null;
    }

  displayTodo(todo) {
    this.selected = todo;
  }

  updateBooking(booking: Booking) {
    // this.todos[todo.id - 1] = Object.assign({}, todo);
    // this.selected = Object.assign({}, todo);
    this.bServe.update(booking).subscribe(
      (good) => {
        this.loadBookings();
        if (this.selected != null) {
          this.selected = Object.assign({}, booking);
        }
      },
      (bad) => {
        console.error(bad);
      }
    );
    this.updatedBooking = null;
  }

  deleteBooking(id) {
    this.bServe.destroy(id).subscribe(
      (good) => {
        this.loadBookings();
      },
      (bad) => {
        console.error(bad);
      }
    );
    this.selected=null;
  }

  setUpdatedBooking() {
    this.updatedBooking = Object.assign({}, this.selected);
  }

averageDuration=function () {
  var count:  number =0;
  var total: number = 0;
  for (let i=0; i< this.bookings.length; i++){
    total += this.bookings[i].duration;
    count ++;
    console.log('loop' + this.bookings[i].duration);
  }
  console.log(count);
  console.log(total);


 let average :number;
  average = total/count;
  this.avgDuration = average;
};



}
