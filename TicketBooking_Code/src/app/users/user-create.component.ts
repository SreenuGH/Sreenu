import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl, ValidationErrors, NgForm } from '@angular/forms';
import { stringify } from 'querystring';
import { Department } from '../models/department.model'
import { User } from '../models/user.model'
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker'
import { UserService } from './user.service'
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  //selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  @ViewChild('userForm', { static: false }) public createUserForm: NgForm;
  datepickerConfig: Partial<BsDatepickerConfig>;
  previewPhoto = false;
  panelTitle: string;
  departments: Department[] = [
    { id: 1, name: "Help Desk" },
    { id: 2, name: "HR" },
    { id: 3, name: "IT" },
    { id: 4, name: "Payroll" }
  ];

  user: User;
  constructor(private _userService: UserService,
    private _router: Router,
    private _route: ActivatedRoute) {
    this.datepickerConfig = Object.assign({}, {
      containerClass: 'theme-dark-blue',
      showWeekNumbers: true,
      minDate: new Date(2018, 0, 1),
      maxDate: new Date(2018, 11, 31),
    });
  }
  togglePhotoPreview(): void {
    this.previewPhoto = !this.previewPhoto;
  }
  ngOnInit() {
    this._route.paramMap.subscribe(parameterMap => {
      const id = +parameterMap.get('id');
      this.getUser(id);
    });
  }
  getUser(id: number) {
    if (id == 0) {
      this.user = {
        id: null,
        fullName: null,
        gender: null,
        contactPreference: null,
        phoneNumber: null,
        email: '',
        dateOfBirth: null,
        department: null,
        isActive: null,
        photoPath: null
      }
      this.panelTitle = "Create User";
    }
    else {
      this.panelTitle = "Edit User";
      this._userService.getUser(id).subscribe(
        (user) => this.user = user,
        (err: any) => console.log(err)
      )
    }
  }

  saveUser(): void {
    if (this.user.id == null)
    {
    this._userService.addUser(this.user).subscribe(
      (data: User) => {
        console.log(data);
        this.createUserForm.reset();
        this._router.navigate(['list']);
      },
      (error: any) => console.log()
    );
  }
  else
  {
    this._userService.updateUser(this.user).subscribe(
      () => {
        this.createUserForm.reset();
        this._router.navigate(['list']);
      },
      (error: any) => console.log()
    );
  }
}

}



