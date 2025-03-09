import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CommonService } from '../common.service';
declare var $: any;
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  userForm: any;
  UsersData: any;

  constructor(public fb: FormBuilder, private service: CommonService) {
    this.userForm = this.fb.group({
      Name: [''],
      Email: [''],
      Mobile: [''],
      Age: [''],
    });
  }

  ngOnInit(): void {
    this.getAllUsers();
  }

  submitForm() {
    var type = this.userForm.id == null ? 'Add' : 'Update';
    console.log(this.userForm.value);
    this.service.AddUpdateUser(this.userForm.value, type).subscribe((data) => {
      if (type == 'Add') {
        alert('Added');
      } else {
        alert('Updated');
      }
      this.userForm.reset();
      // this.UsersData = data;
      this.getAllUsers();
    });
  }

  getAllUsers() {
    console.log(this.userForm.value);
    this.service.getAlluser().subscribe((data) => {
      this.UsersData = data;
      console.log(data);
    });
  }

  deleteUserById(id: any) {
    this.service.deleteUserById(id).subscribe((data) => {
      this.getAllUsers();
    });
  }

  getUserById(id: any) {
    this.service.getUserById(id).subscribe((data) => {
      console.log(data);
      $('#home').addClass('show');
      $('#home').addClass('active');

      $('#profile').removeClass('show');
      $('#profile').removeClass('active');
      this.userForm.patchValue({
        Name: data.Name,
        Email: data.Email,
        Mobile: data.Mobile,
        Age: data.Age,
      });
      // this.getAllUsers()
    });
  }
}
