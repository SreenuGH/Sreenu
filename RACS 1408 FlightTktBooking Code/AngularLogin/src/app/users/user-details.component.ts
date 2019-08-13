import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserDetailsService } from './user.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  private _id:number;
  user:User;

  constructor(private _route:ActivatedRoute,
    private _userService: UserDetailsService,
    private _router: Router) { }

  ngOnInit() {
    this._route.paramMap.subscribe(params => {
      this._id=+params.get('id');
      this._userService.getUser(this._id).subscribe(
        (user) => this.user=user,
        (err:any) => console.log(err)
      )  
    })
  }

  viewNextUser()
  {
    if (this._id<6)
    {
      this._id=this._id+1;
    }
    else
    {
      this._id=1;
    }
    this._router.navigate(['/userdetails',this._id],{
      queryParamsHandling:'preserve'
    });
  }
}
