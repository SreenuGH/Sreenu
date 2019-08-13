import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl, ValidationErrors, NgForm } from '@angular/forms';
import { stringify } from 'querystring';
// import { RoleType } from '../models/roletype.model'
import { City } from '../models/cities.model'
import { Ticket } from '../models/ticket.model'
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker'
import { TicketService } from './ticket.service'
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  //selector: 'app-ticket-create',
  templateUrl: './ticket-create.component.html',
  styleUrls: ['./ticket-create.component.css']
})
export class TicketCreateComponent implements OnInit {
  @ViewChild('ticketForm', { static: false }) public createTicketForm: NgForm;
  datepickerConfig: Partial<BsDatepickerConfig>;
  previewPhoto = false;
  panelTitle: string;
  cities: City[] = [
    { id: 1, name: "Melbourne" },
    { id: 2, name: "Delhi" },
    { id: 3, name: "Hong Kong" },
    { id: 4, name: "Singapore" },
    { id: 5, name: "Thailand" },
    { id: 6, name: "Sydney" }
  ];

  ticket: Ticket;
  constructor(private _ticketService: TicketService,
    private _router: Router,
    private _route: ActivatedRoute) {
    this.datepickerConfig = Object.assign({}, {
      containerClass: 'theme-dark-blue',
      showWeekNumbers: true,
      minDate: new Date(2018, 0, 1),
      maxDate: new Date(2018, 11, 31),
    });
  }
  togglePhotoPreview(): void {
    this.previewPhoto = !this.previewPhoto;
  }
  ngOnInit() {
    this._route.paramMap.subscribe(parameterMap => {
      const id = +parameterMap.get('id');
      this.getTicket(id);
    });
  }
  getTicket(id: number) {
    if (id == 0) {
      this.ticket = {
        id: null,
        fullName: null,
        passportId: null,
        airlinesName: null,
        departureCity: null, 
        arrivalCity: null,
        price:null,
        gender: null,
        phoneNumber: null,
        email: '',
        dateOfBirth: null,
        photoPath: null
      }
      this.panelTitle = "Book A Ticket";
    }
    else {
      this.panelTitle = "Edit A Ticket";
      this._ticketService.getTicket(id).subscribe(
        (ticket) => this.ticket = ticket,
        (err: any) => console.log(err)
      )
    }
  }

  saveTicket(): void {
    if (this.ticket.id == null)
    {
    this._ticketService.addTicket(this.ticket).subscribe(
      (data: Ticket) => {
        console.log(data);
        this.createTicketForm.reset();
        this._router.navigate(['ticketlist']);
      },
      (error: any) => console.log()
    );
  }
  else
  {
    this._ticketService.updateTicket(this.ticket).subscribe(
      () => {
        this.createTicketForm.reset();
        this._router.navigate(['ticketlist']);
      },
      (error: any) => console.log()
    );
  }
}

}



