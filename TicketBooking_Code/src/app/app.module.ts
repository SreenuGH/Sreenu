import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker'; 
import {HttpClientModule} from '@angular/common/http';

import { UserListComponent } from './users/user-list.component';
import { UserCreateComponent } from './users/user-create.component';
import {UserService} from './users/user.service';
import { DisplayUserComponent } from './users/display-user.component'
import { CreateUserCanDeactivateGuardService } from './users/create-user-can-deactivate.service';
import { UserDetailsComponent } from './users/user-details.component';
import { UserFilterPipe } from './users/user-filter.pipe';
import { UserListResolverService } from './users/User-list-resolver.service';
import {UserDetailsGuardService} from './users/user-details-guard.service'

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import {FlightListComponent } from './flights/flight-list.component';
import {FlightCreateComponent } from './flights/flight-create.component';
import {FlightService} from './flights/flight.service';
import { DisplayFlightComponent } from './flights/display-flight.component'
import { CreateFlightCanDeactivateGuardService } from './flights/create-flight-can-deactivate.service';
import { FlightDetailsComponent } from './flights/flight-details.component';
import { FlightFilterPipe } from './flights/flight-filter.pipe';
import { FlightListResolverService } from './flights/flight-list-resolver.service';
import {FlightDetailsGuardService} from './flights/flight-details-guard.service'

import { AccordianComponent } from './shared/accordian.component';
import { PageNotFoundComponent } from './page-not-found.component';

import {TicketListComponent } from './tickets/ticket-list.component';
import { TicketCreateComponent } from './tickets/ticket-create.component';
import {TicketService} from './tickets/ticket.service';
import { DisplayTicketComponent } from './tickets/display-ticket.component'
import { CreateTicketCanDeactivateGuardService } from './tickets/create-ticket-can-deactivate.service';
import { TicketDetailsComponent } from './tickets/ticket-details.component';
import { TicketFilterPipe } from './tickets/ticket-filter.pipe';
import { TicketListResolverService } from './tickets/ticket-list-resolver.service';
import {TicketDetailsGuardService} from './tickets/ticket-details-guard.service'


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserCreateComponent,
    DisplayUserComponent,
    UserDetailsComponent,
    UserFilterPipe,
    FlightListComponent,
    FlightCreateComponent,
    DisplayFlightComponent,
    FlightDetailsComponent,
    FlightFilterPipe,
    TicketListComponent,
    TicketCreateComponent,
    DisplayTicketComponent,
    TicketDetailsComponent,
    TicketFilterPipe,
    AccordianComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [FlightService, CreateFlightCanDeactivateGuardService,
    FlightListResolverService, FlightDetailsGuardService,
    UserService, CreateUserCanDeactivateGuardService,
    UserListResolverService, UserDetailsGuardService,
    TicketService, CreateTicketCanDeactivateGuardService,
    TicketListResolverService, TicketDetailsGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
