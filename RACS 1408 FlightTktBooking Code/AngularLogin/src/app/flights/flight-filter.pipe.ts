import { PipeTransform, Pipe } from '@angular/core';
import { Flight } from '../models/flight.model';
@Pipe({
    name:'flightFilter',
    pure:false
})
export class FlightFilterPipe implements PipeTransform{
    private count=0;
    transform(flights:Flight[], searchTerm:string):Flight[]
    {
        this.count++;
        // console.log("The mouse was moved" + this.count);
        if (!flights || !searchTerm)
        {
            return flights;
        }

        return flights.filter(flight=>
            flight.fullName.toLowerCase().indexOf(searchTerm.toLowerCase())!=-1);
    }
}