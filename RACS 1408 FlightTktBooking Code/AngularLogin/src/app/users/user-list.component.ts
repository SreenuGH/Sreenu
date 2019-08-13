import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  // selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
users:User[];
filteredUsers: User[];
userToDisplay: User;
private _searchTerm:string;

get searchTerm():string
{
    return this._searchTerm;
}
set searchTerm(value:string)
{
  this._searchTerm=value;
  this.filteredUsers=this.filterUsers(value);
}

filterUsers(searchString:string)
{
  return this.users.filter(user=>
    user.fullName.toLowerCase().indexOf(searchString.toLowerCase())!=-1);
}
private arrayIndex =1;
  constructor(private _route:ActivatedRoute) {
    this.users=this._route.snapshot.data['userList'];
      if(this._route.snapshot.queryParamMap.has('searchTerm'))
      {
          this.searchTerm=this._route.snapshot.queryParamMap.get('searchTerm');
      }
      else
      {
          this.filteredUsers=this.users;
      }
   }

  ngOnInit() {
    console.log("The Query parameters" + this._route.snapshot.queryParams.get('searchTerm'));
  }

  nextUser():void{
    if (this.arrayIndex<=2)
    {
      this.userToDisplay=this.users[this.arrayIndex];
      this.arrayIndex++;
    }
    else
    {
      this.userToDisplay=this.users[0];
      this.arrayIndex=1;
    }
  }

  onDeleteNotification(id:number){
    const i= this.filteredUsers.findIndex(e => e.id === id);
        if (i !==-1)
        {
            this.filteredUsers.splice(i,1);
        }
  }

}
