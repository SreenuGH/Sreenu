import { Component, OnInit, Input, Output, EventEmitter, } from '@angular/core';
import { User } from '../models/user.model';
import { ActivatedRoute, Router } from '@angular/router';
import { UserDetailsService } from './user.service';

@Component({
  selector: 'app-display-user',
  templateUrl: './display-user.component.html',
  styleUrls: ['./display-user.component.css']
})
export class DisplayUserComponent implements OnInit  {
  private selectedUserId: number;
  @Input() user:User;
  @Input() searchTerm:string;
  @Output() notifyDelete:EventEmitter<number>=new EventEmitter<number>();
  confirmDelete=false;
  
  constructor(private _route:ActivatedRoute,
    private _router: Router,
    private _userService:UserDetailsService) { }
  ngOnInit() {
     this.selectedUserId= +this._route.snapshot.paramMap.get('id');
  }
  getUserNameAndGender()
  {
    return this.user.fullName + ' ' + this.user.gender;
  }
  viewUser()
  {
    this._router.navigate(['/userdetails',this.user.id],{
      queryParams: {'searchTerm':this.searchTerm}
    });
  }
  editUser()
  {
    this._router.navigate(['/edit',this.user.id]);
  }

  deleteUser()
  {
    this._userService.deleteUser(this.user.id).subscribe(
      () => console.log(`User with Id= ${this.user.id} deleted`),
      (err) => console.log()
    )
    this.notifyDelete.emit(this.user.id);
  }
}
