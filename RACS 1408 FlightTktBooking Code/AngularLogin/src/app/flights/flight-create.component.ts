import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl, ValidationErrors, NgForm } from '@angular/forms';
import { stringify } from 'querystring';
import { City } from '../models/cities.model'
import { Flight } from '../models/flight.model'
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker'
import { FlightService } from './flight.service'
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  //selector: 'app-flight-create',
  templateUrl: './flight-create.component.html',
  styleUrls: ['./flight-create.component.css']
})
export class FlightCreateComponent implements OnInit {
  @ViewChild('flightForm', { static: false }) public createFlightForm: NgForm;
  datepickerConfig: Partial<BsDatepickerConfig>;
  previewPhoto = false;
  panelTitle: string;
  cities: City[] = [
    { id: 1, name: "Melbourne" },
    { id: 2, name: "Delhi" },
    { id: 3, name: "Hong Kong" },
    { id: 4, name: "Singapore" },
    { id: 5, name: "Thailand" },
    { id: 6, name: "Sydney" }
  ];

  flight: Flight;
  constructor(private _flightService: FlightService,
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
      this.getFlight(id);
    });
  }
  getFlight(id: number) {
    if (id == 0) {
      this.flight = {
        id: null,
        fullName: null,
        startTime:null, 
        endTime:null,
        passengerCapacity:null,
        departureCity: null,
        arrivalCity: null,
        photoPath: null,
      }
      this.panelTitle = "Add A Flight";
    }
    else {
      this.panelTitle = "Edit A Flight";
      this._flightService.getFlight(id).subscribe(
        (flight) => this.flight = flight,
        (err: any) => console.log(err)
      )
    }
  }

  saveFlight(): void {
    if (this.flight.id == null)
    {
    this._flightService.addFlight(this.flight).subscribe(
      (data: Flight) => {
        console.log(data);
        this.createFlightForm.reset();
        this._router.navigate(['flightlist']);
      },
      (error: any) => console.log()
    );
  }
  else
  {
    this._flightService.updateFlight(this.flight).subscribe(
      () => {
        this.createFlightForm.reset();
        this._router.navigate(['flightlist']);
      },
      (error: any) => console.log()
    );
  }
}

}