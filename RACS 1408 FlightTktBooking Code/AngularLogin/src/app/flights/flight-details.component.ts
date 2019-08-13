import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlightService } from './flight.service';
import { Flight } from '../models/flight.model';

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.css']
})
export class FlightDetailsComponent implements OnInit {
  private _id:number;
  flight:Flight;

  constructor(private _route:ActivatedRoute,
    private _flightService: FlightService,
    private _router: Router) { }

  ngOnInit() {
    this._route.paramMap.subscribe(params => {
      this._id=+params.get('id');
      this._flightService.getFlight(this._id).subscribe(
        (flight) => this.flight=flight,
        (err:any) => console.log(err)
      )  
    })
  }

  viewNextflight()
  {
    if (this._id<6)
    {
      this._id=this._id+1;
    }
    else
    {
      this._id=1;
    }
    this._router.navigate(['/flights',this._id],{
      queryParamsHandling:'preserve'
    });
  }
}
