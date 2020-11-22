window.addEventListener('load', function(e) {
	console.log('document loaded');
	getAllEvents();
	init();
});


function init() {
	document.createBooking.submit.addEventListener('click', function(e) {
		e.preventDefault();
		createNewBooking(e);
		location.reload()

	});
	document.updateBooking.submit.addEventListener('click', function(e) {
		e.preventDefault();
		var bookingId = document.getElementById('bookingId');
		updateBookingById(bookingId.value);
		location.reload()

	});
	document.deleteBooking.submit.addEventListener('click', function(e) {
		e.preventDefault();
		var idToDelete = document.getElementById('deletedId');
		deleteBookingById(idToDelete.value);
			location.reload()

	});
	
}

function getAllEvents() {
	console.log('listAllBookings()');
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/bookings');

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {

			if (xhr.status === 200) {
				// * On success, if a response was received parse the film data
				//   and pass the film object to displayFilm().

				let bookings = JSON.parse(xhr.responseText);
				displayAllBookingEvents(bookings);
				findAverageDuration(bookings);
			}
			else {
				console.log("Booking not found");
				// * On failure, or if no response text was received, put "Film not found"
				//   in the filmData div.
			}

			// TODO:
			// * Use XMLHttpRequest to perform a GET request to "api/films/"
			//   with the filmId appended.


		}
	};
	xhr.send();
}
function displayAllBookingEvents(bookings) {
	
	var table = document.createElement('table');
	var tableHead = document.createElement('thead');
	var tableRow = document.createElement('tr');
	var idHeader = document.createElement('th');
	var fNameHeader = document.createElement('th');
	var lNameHeader = document.createElement('th');
	var emailHeader = document.createElement('th');
	var dateHeader = document.createElement('th');
	var photoTypeHeader = document.createElement('th');
	var locationHeader = document.createElement('th');
	var durationHeader = document.createElement('th');
	var notesHeader = document.createElement('th');
	var tableBody = document.createElement('tbody');

	idHeader.textContent = "ID";
	idHeader.style.fontFamily="Avenir Light"
	idHeader.style.fontSize="19px"
	idHeader.style.paddingRight="20px"
		idHeader.style.color="gray"
	
	fNameHeader.textContent = "FIRST NAME";
	fNameHeader.style.fontFamily="Avenir Light"
		fNameHeader.style.fontSize="19px"
			fNameHeader.style.paddingRight="20px"
			fNameHeader.style.color="gray"


	lNameHeader.textContent = "LAST NAME";
	lNameHeader.style.fontFamily="Avenir Light"
		lNameHeader.style.fontSize="19px"
			lNameHeader.style.paddingRight="20px"
			lNameHeader.style.color="gray"


	emailHeader.textContent = "EMAIL";
	emailHeader.style.fontFamily="Avenir Light"
		emailHeader.style.fontSize="19px"
			emailHeader.style.paddingRight="20px"
			emailHeader.style.color="gray"


	dateHeader.textContent = "DATE";
	dateHeader.style.fontFamily="Avenir Light"
		dateHeader.style.fontSize="19px"
			dateHeader.style.paddingRight="20px"
			dateHeader.style.color="gray"


	photoTypeHeader.textContent = "PHOTO TYPE";
	photoTypeHeader.style.fontFamily="Avenir Light"
		photoTypeHeader.style.fontSize="19px"
			photoTypeHeader.style.paddingRight="20px"
			photoTypeHeader.style.color="gray"

		

	locationHeader.textContent = "LOCATION";
	locationHeader.style.fontFamily="Avenir Light"
		locationHeader.style.fontSize="19px"
			locationHeader.style.paddingRight="20px"
			locationHeader.style.color="gray"


	durationHeader.textContent = "DURATION";
	durationHeader.style.fontFamily="Avenir Light"
		durationHeader.style.fontSize="19px"
			durationHeader.style.paddingRight="20px"
			durationHeader.style.color="gray"


	notesHeader.textContent = "NOTES";
	notesHeader.style.fontFamily="Avenir Light"
		notesHeader.style.fontSize="19px"
			notesHeader.style.paddingRight="20px"
			notesHeader.style.color="gray"



	table.appendChild(tableHead);
	tableHead.appendChild(tableRow);
	tableRow.appendChild(idHeader);
	tableRow.appendChild(fNameHeader);
	tableRow.appendChild(lNameHeader);
	tableRow.appendChild(emailHeader);
	tableRow.appendChild(dateHeader);
	tableRow.appendChild(photoTypeHeader);
	tableRow.appendChild(locationHeader);
	tableRow.appendChild(durationHeader);
	tableRow.appendChild(notesHeader);

	table.appendChild(tableBody);
	tableHead.appendChild(tableRow);
	bookings.forEach((booking, i) => {
		var bookingRow = document.createElement('tr');
		var idJ = document.createElement('td');
		var fNameJ = document.createElement('td');
		var lNameJ = document.createElement('td');
		var emailJ = document.createElement('td');
		var dateJ = document.createElement('td');
		var photoTypeJ = document.createElement('td');
		var locationJ = document.createElement('td');
		var durationJ = document.createElement('td');
		var notesJ = document.createElement('td');

		idJ.textContent = booking.id;
		idJ.style.fontFamily="Avenir light";
		
		fNameJ.textContent = booking.firstName;
				fNameJ.style.fontFamily="Avenir light";

		lNameJ.textContent = booking.lastName;
				lNameJ.style.fontFamily="Avenir light";

		emailJ.textContent = booking.email;
				emailJ.style.fontFamily="Avenir light";

		dateJ.textContent = booking.date;
				dateJ.style.fontFamily="Avenir light";
				dateJ.style.paddingRigt="20 px";

		photoTypeJ.textContent = booking.photoType;
				photoTypeJ.style.fontFamily="Avenir light";

		locationJ.textContent = booking.location;
				locationJ.style.fontFamily="Avenir light";

		durationJ.textContent = booking.duration;
				durationJ.style.fontFamily="Avenir light";

		notesJ.textContent = booking.notes;
				notesJ.style.fontFamily="Avenir light";


		bookingRow.appendChild(idJ);
		bookingRow.appendChild(fNameJ);
		bookingRow.appendChild(lNameJ);
		bookingRow.appendChild(emailJ);
		bookingRow.appendChild(dateJ);
		bookingRow.appendChild(photoTypeJ);
		bookingRow.appendChild(locationJ);
		bookingRow.appendChild(durationJ);
		bookingRow.appendChild(notesJ);

		tableBody.appendChild(bookingRow);
		table.appendChild(tableBody);
		var listOfBookings = document.getElementById('allBookings');
		listOfBookings.append(table);
	});
}

function displayBooking(booking) {
	var divBookingData = document.getElementById("bookingData");
	
	var bookingList = document.createElement('ul'); 
	divBookingData.appendChild(bookingList);

	var li1 = document.createElement('li');
	li1.textContent=booking.firstName.value;
	bookingList.appendChild(li1);
	
	
	var li2 = document.createElement('li');
	li2.textContent=booking.lastName.value;
	bookingList.appendChild(li2);


	var li3 = document.createElement('li');
	li3.textContent=booking.email.value;
	bookingList.appendChild(li3);
	
	var li4 = document.createElement('li');
	li4.textContent=booking.date.value;
	bookingList.appendChild(li4);
	
	var li5 = document.createElement('li');
	li5.textContent=booking.photoType.value;
	bookingList.appendChild(li5);
	
	var li7 = document.createElement('li');
	li7.textContent=booking.location.value;
	bookingList.appendChild(li7);
	
	var li8 = document.createElement('li');
	li8.textContent=booking.duration.value;
	bookingList.appendChild(li8);
	
	var li9 = document.createElement('li');
	li9.textContent=booking.notes.value;
	bookingList.appendChild(li9);
	

	// TODO:
	// * Create and append elements to the data div to display:
	// * Film title (h1) and description (blockquote).
	// * Rating, release year, and length as an unordered list.
}

function createNewBooking(e){
	let newBooking=null;
	if (document.createBooking.date.value.match(/(\d{4})-(\d{2})-(\d{2})/)){
	newBooking = { 
	firstName: document.createBooking.firstName.value, 
	lastName: document.createBooking.lastName.value, 
	email: document.createBooking.email.value, 
	date: document.createBooking.date.value,
	photoType: document.createBooking.photoType.value,
	location: document.createBooking.location.value,
	duration: document.createBooking.duration.value,
	notes: document.createBooking.notes.value
	
	};
	console.log(newBooking);
	}
	else{ alert("Please enter valid booking date format: YYYY-MM-DD");
	location.reload()
}
	
	
	var xhr = new XMLHttpRequest();
xhr.open('POST', 'api/bookings', true);

xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 ) {
    if ( xhr.status == 200 || xhr.status == 201 ) { // Ok or Created
      var createdBooking = JSON.parse(xhr.responseText);
      console.log(createdBooking);
	displayBooking(createdBooking);
    }
    else {
      console.log("POST request failed.");
      console.error(xhr.status + ': ' + xhr.responseText);
    }
  }
};

  xhr.setRequestHeader('Content-type','application/json')
  xhr.send(JSON.stringify(newBooking));
}
	
function updateBookingById(id){
	let updatedBooking = { 
	firstName: document.updateBooking.firstName.value, 
	lastName: document.updateBooking.lastName.value, 
	email: document.updateBooking.email.value, 
	date: document.updateBooking.date.value,
	photoType: document.updateBooking.photoType.value,
	
	location: document.updateBooking.location.value,
	duration: document.updateBooking.duration.value,
	notes: document.updateBooking.notes.value
	
	};
	console.log(updatedBooking);
	
	var xhr = new XMLHttpRequest();
xhr.open('PUT', 'api/bookings/' + id);

xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 ) {
    if ( xhr.status == 200 || xhr.status == 201 ) { // Ok or Created
      var updatedBooking = JSON.parse(xhr.responseText);
      console.log(updatedBooking);
	displayBooking(updatedBooking);
    }
    else {
      console.log("Update request failed.");
      console.error(xhr.status + ': ' + xhr.responseText);
    }
  }
};

  xhr.setRequestHeader('Content-type','application/json')
  xhr.send(JSON.stringify(updatedBooking));
}



function deleteBookingById(id){

	var xhr = new XMLHttpRequest();
xhr.open('DELETE', 'api/bookings/' + id , true);

xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 ) {
    if ( xhr.status == 204 ) { // Ok 
alert('This booking has been deleted')    }
    else {
      console.log("Delete request failed.");
      console.error(xhr.status + ': ' + xhr.responseText);
    }
  }
};
xhr.send();

}


function findAverageDuration(bookings){
	var total =0;
	var count = bookings.length;
	bookings.forEach((booking, i) => {
  let durationTime =booking.duration;
	total += durationTime;
});
let average= (total/count);
console.log(count);
console.log(total/count);
printAverageDuration(average.toFixed(1));
}

function printAverageDuration(average){
	let divAverage = document.getElementById('showAverage');
	divAverage.textContent = "THE AVERAGE BOOKING TIME IS " + average + " HOURS";
	divAverage.style.fontFamily="Avenir light";
	divAverage.style.textAlign="center";
	divAverage.style.fontSize="30px";
	divAverage.style.color="gray";
	
}
	
