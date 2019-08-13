import { CanDeactivate } from '@angular/router';
import { TicketCreateComponent } from './ticket-create.component';
import { Injectable } from '@angular/core';

@Injectable()
export class CreateTicketCanDeactivateGuardService implements CanDeactivate<TicketCreateComponent>
{
    canDeactivate(component: TicketCreateComponent): boolean
    {
        if (component.createTicketForm.dirty)
        {
            return confirm('Are you sure, you want to discard the changes?');
        }
        return true;
    }
}