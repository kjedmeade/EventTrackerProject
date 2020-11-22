## EventTrackerProject

This project is a tracker for photography bookings. A user is able to perform CRUD operations on a photography booking database belonging to a single photographer. Response codes were also created to show the status of a request based on the request.

### Technologies used:
* JavaScript
* XHR
* Spring REST Services
* JPARepository
* Postman
* Java
* Gradle
* Git
* MySQL
* MySQL Workbench
* AWS EC2
* XML
* Github
* Eclipse
* Atom

### Database
The database used is collection of data on photography bookings for a single photographer. Booking information for each client  in the database includes the first name, last name, booking date, type of event (e.g. portrait session), location, etc.


![GitHub Logo](DB/bookingsdb.png)
### Classes
#### Booking Entity
A gradle project was created to store the booking entity and a Junit test case was conducted to confirm correct mappings.

#### Other Classes
A separate Spring Starter Project was created to hold the controller, service, repository classes for the booking entity.  The main service class holds methods for conducting CRUD operations on the booking database.

### JavaScript
JavaScript was used to create the front end of this application via XHR. Event listeners, XHR code, and some of the elements displayed on the page were coded in the script.js file.

### Postman
Postman test were created to check for correct mappings. A user is able view a list of all bookings in the database, find a booking by its id, create a new booking, update a booking, and/or delete a booking. Status codes were also added and implemented confirm the status of a request.

### Access
List all bookings(Get)
http://3.132.51.29:8080/BookingsTracker/api/bookings

Find a single booking by Id (Get)
http://3.132.51.29:8080/BookingsTracker/api/bookings/{id}

Create a new booking(Post)
http://3.132.51.29:8080/BookingsTracker/api/bookings/

Update a booking(Put)
http://3.132.51.29:8080/BookingsTracker/api/bookings/{id}

Delete a booking(Delete)
http://3.132.51.29:8080/BookingsTracker/api/bookings/{id}



### Lessons learned:
I am learning more about the ease of use that with JPARepository.
