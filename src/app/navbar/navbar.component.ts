import { Component, OnInit } from '@angular/core';
import {Router} from'@angular/router';
import {ToastrService} from 'ngx-toastr';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private route : Router,private toaster : ToastrService) { }

  ngOnInit() {
  }
  Logout(){
    localStorage.clear();
    this.route.navigate(['/login']);
    this.toaster.success('signed out Sucessfully')
  }
}
