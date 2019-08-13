import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AccordianComponent } from './shared/accordian.component';

// used to create fake backend
import { fakeBackendProvider } from './helpers/fake-backend';

import { AppComponent }  from './app.component';
import { routing }        from './app-routing';

import { JwtInterceptor} from './helpers/jwt.interceptor';
import {  ErrorInterceptor } from './helpers/error.interceptor';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';

import {TicketListComponent } from './tickets/ticket-list.component';
import { TicketCreateComponent } from './tickets/ticket-create.component';
import {TicketService} from './tickets/ticket.service';
import { DisplayTicketComponent } from './tickets/display-ticket.component'
import { CreateTicketCanDeactivateGuardService } from './tickets/create-ticket-can-deactivate.service';
import { TicketDetailsComponent } from './tickets/ticket-details.component';
import { TicketFilterPipe } from './tickets/ticket-filter.pipe';
import { TicketListResolverService } from './tickets/ticket-list-resolver.service';
import {TicketDetailsGuardService} from './tickets/ticket-details-guard.service';

import {FlightListComponent } from './flights/flight-list.component';
import {FlightCreateComponent } from './flights/flight-create.component';
import {FlightService} from './flights/flight.service';
import { DisplayFlightComponent } from './flights/display-flight.component'
import { CreateFlightCanDeactivateGuardService } from './flights/create-flight-can-deactivate.service';
import { FlightDetailsComponent } from './flights/flight-details.component';
import { FlightFilterPipe } from './flights/flight-filter.pipe';
import { FlightListResolverService } from './flights/flight-list-resolver.service';
import {FlightDetailsGuardService} from './flights/flight-details-guard.service';

import { UserListComponent } from './users/user-list.component';
import { UserCreateComponent } from './users/user-create.component';
import {UserDetailsService} from './users/user.service';
import { DisplayUserComponent } from './users/display-user.component'
import { CreateUserCanDeactivateGuardService } from './users/create-user-can-deactivate.service';
import { UserDetailsComponent } from './users/user-details.component';
import { UserFilterPipe } from './users/user-filter.pipe';
import { UserListResolverService } from './users/user-list-resolver.service';
import {UserDetailsGuardService} from './users/user-details-guard.service'
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import { PageNotFoundComponent } from './page-not-found.component'; 

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        routing,
        BsDatepickerModule.forRoot(),
        ReactiveFormsModule,
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        AdminComponent,
        LoginComponent,
        
        TicketListComponent,
        TicketCreateComponent,
        DisplayTicketComponent,
        TicketDetailsComponent,
        TicketFilterPipe,
    
        FlightListComponent,
        FlightCreateComponent,
        DisplayFlightComponent,
        FlightDetailsComponent,
        FlightFilterPipe,

        UserListComponent,
        UserCreateComponent,
        DisplayUserComponent,
        UserDetailsComponent,
        UserFilterPipe,
        AccordianComponent,
        PageNotFoundComponent
    ],
    providers: [    TicketService, CreateTicketCanDeactivateGuardService,
        TicketListResolverService, TicketDetailsGuardService,
        FlightService, CreateFlightCanDeactivateGuardService,
    FlightListResolverService, FlightDetailsGuardService,
        UserDetailsService, CreateUserCanDeactivateGuardService,
        UserListResolverService, UserDetailsGuardService,
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }