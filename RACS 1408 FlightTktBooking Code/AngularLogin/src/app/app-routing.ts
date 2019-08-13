import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { Role } from './models/role';

import { TicketListComponent } from './tickets/ticket-list.component';
import { TicketCreateComponent } from './tickets/ticket-create.component';
import { CreateTicketCanDeactivateGuardService } from './tickets/create-ticket-can-deactivate.service';
import { TicketDetailsComponent } from './tickets/ticket-details.component';
import { TicketListResolverService } from './tickets/ticket-list-resolver.service';
import {TicketDetailsGuardService} from './tickets/ticket-details-guard.service'

import { FlightListComponent } from './flights/flight-list.component';
import { FlightCreateComponent } from './flights/flight-create.component';
import { CreateFlightCanDeactivateGuardService } from './flights/create-flight-can-deactivate.service';
import { FlightDetailsComponent } from './flights/flight-details.component';
import { FlightListResolverService } from './flights/flight-list-resolver.service';
import {FlightDetailsGuardService} from './flights/flight-details-guard.service' 

import { UserListComponent } from './users/user-list.component';
import { UserCreateComponent } from './users/user-create.component';
import { CreateUserCanDeactivateGuardService } from './users/create-user-can-deactivate.service';
import { UserDetailsComponent } from './users/user-details.component';
import { UserListResolverService } from './users/user-list-resolver.service';
import {UserDetailsGuardService} from './users/user-details-guard.service';

import { PageNotFoundComponent } from './page-not-found.component';

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard]
    },
    { 
        path: 'admin', 
        component: AdminComponent, 
        canActivate: [AuthGuard], 
        data: { roles: [Role.Admin] } 
    },
    { 
        path: 'login', 
        component: LoginComponent 
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
    {path: 'userdetails/:id',   
    component:UserDetailsComponent,
    canActivate:[UserDetailsGuardService]
    },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
    // {path: '', redirectTo:'login', pathMatch:'full'},
    // {path: 'notFound', component:PageNotFoundComponent}
];

export const routing = RouterModule.forRoot(appRoutes);