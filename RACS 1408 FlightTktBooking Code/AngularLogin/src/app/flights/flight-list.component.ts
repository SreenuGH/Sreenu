import { Component, OnInit } from '@angular/core';
import { Flight } from '../models/flight.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  // selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent implements OnInit {
flights:Flight[];
filteredflights: Flight[];
flightToDisplay: Flight;
private _searchTerm:string;

get searchTerm():string
{
    return this._searchTerm;
}
set searchTerm(value:string)
{
  this._searchTerm=value;
  this.filteredflights=this.filterflights(value);
}

filterflights(searchString:string)
{
  return this.flights.filter(flight=>
    flight.fullName.toLowerCase().indexOf(searchString.toLowerCase())!=-1);
}
private arrayIndex =1;
  constructor(private _route:ActivatedRoute) {
    this.flights=this._route.snapshot.data['flightList'];
      if(this._route.snapshot.queryParamMap.has('searchTerm'))
      {
          this.searchTerm=this._route.snapshot.queryParamMap.get('searchTerm');
      }
      else
      {
          this.filteredflights=this.flights;
      }
   }

  ngOnInit() {
  }

  nextflight():void{
    if (this.arrayIndex<=2)
    {
      this.flightToDisplay=this.flights[this.arrayIndex];
      this.arrayIndex++;
    }
    else
    {
      this.flightToDisplay=this.flights[0];
      this.arrayIndex=1;
    }
  }

  onDeleteNotification(id:number){
    const i= this.filteredflights.findIndex(e => e.id === id);
        if (i !==-1)
        {
            this.filteredflights.splice(i,1);
        }
  }

}
