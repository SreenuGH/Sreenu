import { Component, OnInit, Input, Output, EventEmitter, } from '@angular/core';
import { Ticket } from '../models/ticket.model';
import { ActivatedRoute, Router } from '@angular/router';
import { TicketService } from './ticket.service';

@Component({
  selector: 'app-display-ticket',
  templateUrl: './display-ticket.component.html',
  styleUrls: ['./display-ticket.component.css']
})
export class DisplayTicketComponent implements OnInit  {
  private selectedTicketId: number;
  @Input() ticket:Ticket;
  @Input() searchTerm:string;
  @Output() notifyDelete:EventEmitter<number>=new EventEmitter<number>();
  confirmDelete=false;
  
  constructor(private _route:ActivatedRoute,
    private _router: Router,
    private _ticketService:TicketService) { }
  ngOnInit() {
     this.selectedTicketId= +this._route.snapshot.paramMap.get('id');
  }
  getTicketNameAndGender()
  {
    return this.ticket.fullName + ' ' + this.ticket.gender;
  }
  viewTicket()
  {
    this._router.navigate(['/tickets',this.ticket.id],{
      queryParams: {'searchTerm':this.searchTerm}
    });
  }
  editTicket()
  {
    this._router.navigate(['/ticketedit',this.ticket.id]);
  }

  deleteTicket()
  {
    this._ticketService.deleteTicket(this.ticket.id).subscribe(
      () => console.log(`Ticket with Id= ${this.ticket.id} deleted`),
      (err) => console.log()
    )
    this.notifyDelete.emit(this.ticket.id);
  }
}
