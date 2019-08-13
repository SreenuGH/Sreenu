import { CanDeactivate } from '@angular/router';
import { UserCreateComponent } from './user-create.component';
import { Injectable } from '@angular/core';

@Injectable()
export class CreateUserCanDeactivateGuardService implements CanDeactivate<UserCreateComponent>
{
    canDeactivate(component: UserCreateComponent): boolean
    {
        if (component.createUserForm.dirty)
        {
            return confirm('Are you sure, you want to discard the changes?');
        }
        return true;
    }
}