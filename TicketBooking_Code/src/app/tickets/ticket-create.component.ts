import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl, ValidationErrors, NgForm } from '@angular/forms';
import { stringify } from 'querystring';
import { Department } from '../models/department.model'
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
  departments: Department[] = [
    { id: 1, name: "Help Desk" },
    { id: 2, name: "HR" },
    { id: 3, name: "IT" },
    { id: 4, name: "Payroll" }
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
        gender: null,
        contactPreference: null,
        phoneNumber: null,
        email: '',
        dateOfBirth: null,
        department: null,
        isActive: null,
        photoPath: null
      }
      this.panelTitle = "Book A Ticket";
    }
    else {
      this.panelTitle = "Edit Ticket";
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



