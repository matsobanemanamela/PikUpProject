import { Component, OnInit } from '@angular/core';
import {UserServiceService} from '../Shared/user-service.service';
import {UserModel} from '../Shared/user-model';
import {Router} from'@angular/router';
import {ToastrService} from 'ngx-toastr';


import {NgForm} from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { first } from 'rxjs/operators';
import {AccommodationModel} from '../pick-up-models/accommodation-model';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
user : UserModel;
usercliams : any
userArry : Array<UserModel> = [];
arr1Length: number;
Image : string;
userarr : UserModel[];
id : number; 



  constructor(private userservice : UserServiceService,private route : Router, private toaster : ToastrService) { }

  ngOnInit() {
    this.userservice.getalltherusers();
   
this.userservice.getUserClaims().subscribe((data: any)=>{
  this.usercliams = data;
  this.userservice.getuserbyID(this.usercliams.UserID);
  localStorage.setItem("UserID", this.usercliams.UserID+'');
  //this.usercliams = data;
  this.id = this.usercliams.UserID;
})

this.userservice.getCustomer();
this.userservice.getuserbyID(this.id);


this.userservice.getspecifiedcustomer();



}


  Logout(){
    localStorage.clear();
    this.route.navigate(['/login']);
    this.toaster.success('signed out Sucessfully')
  }
}
