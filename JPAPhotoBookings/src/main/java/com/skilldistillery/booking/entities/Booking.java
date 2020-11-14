package com.skilldistillery.booking.entities;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Booking {
			
			@Id
			@GeneratedValue(strategy = GenerationType.IDENTITY)
			private int id;
			
			@Column(name = "first_name")
			private String  firstName;
			
			@Column(name = "last_name")
			private String  lastName;
			
			private String  email;
			
		
			private LocalDate date;
			

			@Column(name = "photo_type")
			private String  photoType;
			
			private String  location;
			
			private int duration;
			private String notes;
			
			
			public Booking() {
				super();
			}
			public int getId() {
				return id;
			}
			public void setId(int id) {
				this.id = id;
			}
			public String getFirstName() {
				return firstName;
			}
			public void setFirstName(String firstName) {
				this.firstName = firstName;
			}
			public String getLastName() {
				return lastName;
			}
			public void setLastName(String lastName) {
				this.lastName = lastName;
			}
			public String getEmail() {
				return email;
			}
			public void setEmail(String email) {
				this.email = email;
			}
			public String getPhotoType() {
				return photoType;
			}
			public void setPhotoType(String photoType) {
				this.photoType = photoType;
			}
			public String getLocation() {
				return location;
			}
			public void setLocation(String location) {
				this.location = location;
			}
			public int getDuration() {
				return duration;
			}
			public void setDuration(int duration) {
				this.duration = duration;
			}
			public String getNotes() {
				return notes;
			}
			public void setNotes(String notes) {
				this.notes = notes;
			}
			
			public LocalDate getDate() {
				return date;
			}
			public void setDate(LocalDate date) {
				this.date = date;
			}
			@Override
			public String toString() {
				return "Booking [id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", email=" + email
						+ ", date=" + date + ", photoType=" + photoType + ", location=" + location + ", duration="
						+ duration + ", notes=" + notes + "]";
			}
			@Override
			public int hashCode() {
				final int prime = 31;
				int result = 1;
				result = prime * result + id;
				return result;
			}
			@Override
			public boolean equals(Object obj) {
				if (this == obj)
					return true;
				if (obj == null)
					return false;
				if (getClass() != obj.getClass())
					return false;
				Booking other = (Booking) obj;
				if (id != other.id)
					return false;
				return true;
			}
			
		
	}


