import { Component, OnInit } from '@angular/core';
import { Ticket } from '../models/ticket.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  // selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {
tickets:Ticket[];
filteredTickets: Ticket[];
ticketToDisplay: Ticket;
private _searchTerm:string;

get searchTerm():string
{
    return this._searchTerm;
}
set searchTerm(value:string)
{
  this._searchTerm=value;
  this.filteredTickets=this.filterTickets(value);
}

filterTickets(searchString:string)
{
  return this.tickets.filter(ticket=>
    ticket.fullName.toLowerCase().indexOf(searchString.toLowerCase())!=-1);
}
private arrayIndex =1;
  constructor(private _route:ActivatedRoute) {
    this.tickets=this._route.snapshot.data['ticketList'];
      if(this._route.snapshot.queryParamMap.has('searchTerm'))
      {
          this.searchTerm=this._route.snapshot.queryParamMap.get('searchTerm');
      }
      else
      {
          this.filteredTickets=this.tickets;
      }
   }

  ngOnInit() {
  }

  nextticket():void{
    if (this.arrayIndex<=2)
    {
      this.ticketToDisplay=this.tickets[this.arrayIndex];
      this.arrayIndex++;
    }
    else
    {
      this.ticketToDisplay=this.tickets[0];
      this.arrayIndex=1;
    }
  }

  onDeleteNotification(id:number){
    const i= this.filteredTickets.findIndex(e => e.id === id);
        if (i !==-1)
        {
            this.filteredTickets.splice(i,1);
        }
  }

}
