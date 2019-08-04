import { Component, OnInit, Input, Output, EventEmitter, } from '@angular/core';
import { Flight } from '../models/flight.model';
import { ActivatedRoute, Router } from '@angular/router';
import { FlightService } from './flight.service';

@Component({
  selector: 'app-display-flight',
  templateUrl: './display-flight.component.html',
  styleUrls: ['./display-flight.component.css']
})
export class DisplayFlightComponent implements OnInit  {
  private selectedFlightId: number;
  @Input() flight:Flight;
  @Input() searchTerm:string;
  @Output() notifyDelete:EventEmitter<number>=new EventEmitter<number>();
  confirmDelete=false;
  
  constructor(private _route:ActivatedRoute,
    private _router: Router,
    private _flightService:FlightService) { }
  ngOnInit() {
     this.selectedFlightId= +this._route.snapshot.paramMap.get('id');
  }
  getFlightNameAndGender()
  {
    return this.flight.fullName + ' ' + this.flight.gender;
  }
  viewFlight()
  {
    this._router.navigate(['/flights',this.flight.id],{
      queryParams: {'searchTerm':this.searchTerm}
    });
  }
  editFlight()
  {
    this._router.navigate(['/flightedit',this.flight.id]);
  }

  deleteFlight()
  {
    this._flightService.deleteFlight(this.flight.id).subscribe(
      () => console.log(`flight with Id= ${this.flight.id} deleted`),
      (err) => console.log()
    )
    this.notifyDelete.emit(this.flight.id);
  }
}
