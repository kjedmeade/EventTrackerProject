export class Booking {
		id: number;
		firstName: string;
		lastName: string;
		email: string;
		date: number;
	  photoType: string;
		location: string;
		duration: number;
    notes: string;


    constructor(
    id?: number,
		firstName?: string,
		lastName?: string,
		email?: string,
		date?: number,
	  photoType?: string,
		location?: string,
		duration?: number,
    notes?: string
    )
    {this.id =id;
      this.firstName= firstName;
      this.lastName= lastName;
      this.email= email;
      this.date=date;
      this.photoType=photoType;
      this.location=location;
      this.duration=duration;
      this.notes=notes;
    }

}
