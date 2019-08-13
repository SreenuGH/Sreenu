import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TicketService } from './ticket.service';
import { Ticket } from '../models/ticket.model';

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.css']
})
export class TicketDetailsComponent implements OnInit {
  private _id:number;
  ticket:Ticket;

  constructor(private _route:ActivatedRoute,
    private _ticketService: TicketService,
    private _router: Router) { }

  ngOnInit() {
    this._route.paramMap.subscribe(params => {
      this._id=+params.get('id');
      this._ticketService.getTicket(this._id).subscribe(
        (ticket) => this.ticket=ticket,
        (err:any) => console.log(err)
      )  
    })
  }

  viewNextticket()
  {
    if (this._id<6)
    {
      this._id=this._id+1;
    }
    else
    {
      this._id=1;
    }
    this._router.navigate(['/tickets',this._id],{
      queryParamsHandling:'preserve'
    });
  }
}
