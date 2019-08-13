import {Ticket} from "../models/ticket.model"
export class ResolvedTicketList{
    constructor(public ticketList:Ticket[], public error:any=null){}
}