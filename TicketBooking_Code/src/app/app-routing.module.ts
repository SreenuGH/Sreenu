import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserListComponent } from './users/user-list.component';
import { UserCreateComponent } from './users/user-create.component';
import { CreateUserCanDeactivateGuardService } from './users/create-user-can-deactivate.service';
import { UserDetailsComponent } from './users/user-details.component';
import { UserListResolverService } from './users/User-list-resolver.service';
import {UserDetailsGuardService} from './users/user-details-guard.service'

import { FlightListComponent } from './flights/flight-list.component';
import { FlightCreateComponent } from './flights/flight-create.component';
import { CreateFlightCanDeactivateGuardService } from './flights/create-flight-can-deactivate.service';
import { FlightDetailsComponent } from './flights/flight-details.component';
import { FlightListResolverService } from './flights/flight-list-resolver.service';
import {FlightDetailsGuardService} from './flights/flight-details-guard.service'

import { PageNotFoundComponent } from './page-not-found.component';

import { TicketListComponent } from './tickets/ticket-list.component';
import { TicketCreateComponent } from './tickets/ticket-create.component';
import { CreateTicketCanDeactivateGuardService } from './tickets/create-ticket-can-deactivate.service';
import { TicketDetailsComponent } from './tickets/ticket-details.component';
import { TicketListResolverService } from './tickets/ticket-list-resolver.service';
import {TicketDetailsGuardService} from './tickets/ticket-details-guard.service'



const appRoutes: Routes = [
  //Users
  {path: 'list', 
  component:UserListComponent,
  resolve:{userList: UserListResolverService}
  },
  {
    path: 'edit/:id', 
    component:UserCreateComponent,
    canDeactivate: [CreateUserCanDeactivateGuardService]
  },
  {path: 'users/:id', 
  component:UserDetailsComponent,
   canActivate:[UserDetailsGuardService]
  },
  //Flights
  {path: 'flightlist', 
  component:FlightListComponent,
  resolve:{flightList: FlightListResolverService}
  },
  {
    path: 'flightedit/:id', 
    component:FlightCreateComponent,
    canDeactivate: [CreateFlightCanDeactivateGuardService]
  },
  {path: 'flights/:id', 
  component:FlightDetailsComponent,
   canActivate:[FlightDetailsGuardService]
},
  //Tickets
{path: 'ticketlist', 
component:TicketListComponent,
resolve:{ticketList: TicketListResolverService}
},
{
  path: 'ticketedit/:id', 
  component:TicketCreateComponent,
  canDeactivate: [CreateTicketCanDeactivateGuardService]
},
{path: 'tickets/:id', 
component:TicketDetailsComponent,
 canActivate:[TicketDetailsGuardService]
},
  {path: '', redirectTo:'flightlist', pathMatch:'full'},
  {path: 'notFound', component:PageNotFoundComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  providers:[FlightDetailsGuardService]
})

export class AppRoutingModule { }
