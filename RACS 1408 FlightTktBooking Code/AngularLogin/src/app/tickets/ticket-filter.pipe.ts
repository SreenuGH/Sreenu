import { PipeTransform, Pipe } from '@angular/core';
import { Ticket } from '../models/ticket.model';
@Pipe({
    name:'ticketFilter',
    pure:false
})
export class TicketFilterPipe implements PipeTransform{
    private count=0;
    transform(tickets:Ticket[], searchTerm:string):Ticket[]
    {
        this.count++;
        if (!tickets || !searchTerm)
        {
            return tickets;
        }

        return tickets.filter(ticket=>
            ticket.fullName.toLowerCase().indexOf(searchTerm.toLowerCase())!=-1);
    }
}