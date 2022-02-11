import { Component, OnInit } from '@angular/core';
import {AccommodationModel} from '../pick-up-models/accommodation-model';
import {AccommodationServiceService} from '../pick-up-services/accommodation-service.service';
import {CommentAccommodationModel} from '../pick-up-comment-models/comment-accommodation-model';
import {CommentAccommodationService} from '../pick-up-comment-service/comment-accommodation.service';
import {LikeAccommodationModel} from '../pick-up-likes-models/like-accommodation-model';
import {LikeAccommodationService} from '../pick-up-likes-service/like-accommodation.service';
import {Router} from'@angular/router';
import {ToastrService} from 'ngx-toastr';
import {NgForm} from '@angular/forms';
import dateFormat from 'dateformat';

@Component({
  selector: 'app-accommodation',
  templateUrl: './accommodation.component.html',
  styleUrls: ['./accommodation.component.css'],
  providers : [AccommodationServiceService,CommentAccommodationService,LikeAccommodationService]
})
export class AccommodationComponent implements OnInit {
  accomodationmodel : AccommodationModel;
  accomodationArray : AccommodationModel[];
  likeaccommodationModel : LikeAccommodationModel;
  commentaccommodationmodel : CommentAccommodationModel;
  messageText:String;
  specifiedflighttravellerdetail :Array<AccommodationModel> =[];
  messageArray:Array<{user:String,message:String}> = [];
  id : number = 1;
  matso : number;
  arr1Length: number;
  // today = new Date();
  
  jstoday = '';

  constructor(private accomodationservice : AccommodationServiceService,private commentaccommodationservice : CommentAccommodationService,private likeaccommodationservice : LikeAccommodationService,private toaster : ToastrService,private route : Router) {}
  
  ngOnInit() {

   
    this.accomodationservice.getALLTHEAccommodationbylist().subscribe((data:any) => { this.accomodationArray = data});
    this.accomodationservice.getalltheAccommodation().subscribe((data:any) => { this.accomodationArray = data});
    this.accomodationservice.getAccommodation().subscribe((data:any) => { this.accomodationArray = data});

    this.resetForm();

  }
  resetForm(form? : NgForm){

    if(form != null)
    form.reset();
    this.accomodationmodel ={
      AccommodationID : 0,
      UserID : +localStorage.getItem("CustomerID"),
      TypeOfAccommodation: '',
      NumberofRooms: 1,
      NumberofPeoplePerRoom : 0,
      DistancetoCampus : '',
      WIFI : '',
      Price : 0,
      Comment : '',
      Address : '',
      Suburb : '',
      City : '',
      Province : '',
      Country : '',
      PostalCode : '',
      MainImage : '',
      RoomImage : '',
      KitchenImage : '',
      BathroomImage : ''

    }

  }
  onClick(event, accomodationmodel){
    console.log(accomodationmodel); // here your cart item object will be shown
    // do your stuff here with your cartItem
 localStorage.setItem('example1',accomodationmodel + '');
  }

  onClick2(event, accomodationmodel){
    console.log(accomodationmodel);
  }
  



  onSubmit(){

    
    let now = new Date();
   var date =  dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT");
   var com = document.getElementById("Comments") as HTMLInputElement;
    // NODE JS SERVER 
    this.commentaccommodationmodel={
      CommentID: 0, 
      AccommodationID : +localStorage.getItem("example1"),
      UserID: +localStorage.getItem("CustomerID"),
      DateandTime: date,
      Comments: com.value
      
    }
    this.commentaccommodationservice.PostCommentAccommodation(this.commentaccommodationmodel)
    .subscribe((data:any) => {
        if (data.Succeeded == true)
       
        this.toaster.success('your have commented successfully');
        location.reload();
       }); 
  }

  onSubmitlikes(accomodationmodel : AccommodationModel){
    let now = new Date();
   var date =  dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT");
   var com = document.getElementById("Comments") as HTMLInputElement;
    // NODE JS SERVER 
    this.likeaccommodationModel={
      likeId: 0, 
      AccommodationID : accomodationmodel.AccommodationID,
      UserID: +localStorage.getItem("CustomerID"),
      DateTime: date,
      Condition: 'true'
    }
    this.likeaccommodationservice.PostLikeAccommodation(this.likeaccommodationModel)
    .subscribe((data:any) => {
        if (data.Succeeded == true)
        // this.toaster.success('your have  successfully');
        location.reload();
       }); 
  }
  // sendMessage()
  // {
  //     this.commentaccommodationservice.sendMessage({ message:this.messageText});
  // }

  geteToday(){
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!

    var yyyy = today.getFullYear();

    if(dd<10){
        dd= +('0'+dd);
    } 
    if(mm<10){
        mm = +('0'+mm);
    } 
    return dd+'/'+mm+'/'+yyyy;
    
  }
}
