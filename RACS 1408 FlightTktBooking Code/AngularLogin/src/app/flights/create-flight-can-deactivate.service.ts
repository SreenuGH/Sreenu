import { CanDeactivate } from '@angular/router';
import { FlightCreateComponent } from './flight-create.component';
import { Injectable } from '@angular/core';

@Injectable()
export class CreateFlightCanDeactivateGuardService implements CanDeactivate<FlightCreateComponent>
{
    canDeactivate(component: FlightCreateComponent): boolean
    {
        if (component.createFlightForm.dirty)
        {
            return confirm('Are you sure, you want to discard the changes?');
        }
        return true;
    }
}