import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  userForm: any;
  UsersData: any;


  constructor(public fb:FormBuilder , private service:CommonService){
 this.userForm = this.fb.group({
  Name:[''],
  Email:[''],
  Mobile:[''],
  Age:['']
 })
  }

  ngOnInit(): void{
    this.getAllUsers()
  }

  submitForm(){
    console.log(this.userForm.value)
    this.service.AddUpdateUser(this.userForm.value).subscribe( data =>{ 
      this.userForm.reset();
      // this.UsersData = data;
    })
  }

  getAllUsers(){
    console.log(this.userForm.value)
    this.service.getAlluser().subscribe((data) =>{ 
      this.UsersData = data
      console.log(data)
    })
  }

  deleteUserById(id:any){
    this.service.deleteUserById(id).subscribe((data)=>{
      this.getAllUsers()
    })
  }




}
