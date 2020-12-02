import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Booking } from '../models/booking';


@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private baseUrl = 'http://localhost:8086/';
  private url = this.baseUrl + 'api/bookings';
 index(): Observable<Booking[]> {
    return this.http.get<Booking[]>(this.url + '?sorted=true')
      .pipe(
        catchError((err: any) => {
          console.log(err);
          return throwError('retrieval failed');
        })
      );
  }

  create(data: Booking): Observable<Booking> {
    return this.http.post<Booking>(this.url + '?sorted=true', data)
      .pipe(
        catchError((err: any) => {
          console.log(err);
          return throwError('retrieval failed');
        })
      );
  }
  update(booking: Booking) {
    const httpOptions = {
      headers: {
        'Content-type': 'application/json'
      }
    };
    return this.http.put<Booking[]>(this.baseUrl + '/' + booking.id, booking, httpOptions).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('BookingService: Error retrieving todo list');
      })
    );
  }


  destroy(bookingId: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.url}/${bookingId}`).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('BookingService.destroy(): Error deleting todo');
      })
    );
  }

  constructor(
    private http: HttpClient
    //make sure client from @angular/common/http
    ) { }
}
