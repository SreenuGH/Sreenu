import { PipeTransform, Pipe } from '@angular/core';
import { User } from '../models/user.model';
@Pipe({
    name:'userFilter',
    pure:false
})
export class UserFilterPipe implements PipeTransform{
    private count=0;
    transform(users:User[], searchTerm:string):User[]
    {
        this.count++;
        // console.log("The mouse was moved" + this.count);
        if (!users || !searchTerm)
        {
            return users;
        }

        return users.filter(user=>
            user.fullName.toLowerCase().indexOf(searchTerm.toLowerCase())!=-1);
    }
}