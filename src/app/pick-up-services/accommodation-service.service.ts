import { Injectable } from '@angular/core';
import {AccommodationModel} from '../pick-up-models/accommodation-model';
import {HttpClient, HttpHeaders, HttpRequest,HttpResponse,HttpHeaderResponse} from '@angular/common/http';
import { Observable, Subject, ReplaySubject, from, of, range, BehaviorSubject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AccommodationServiceService {
  readonly rootUrl = "http://localhost:52539/";
  
  accomodationmodel : AccommodationModel;

  constructor( private httpClient : HttpClient) { }

//enter Accommodations information to the db  
  PostAccommodation(accomodationmodel : AccommodationModel){
    var body = JSON.stringify(accomodationmodel);
    var headersOption = new HttpHeaders({'Content-Type':'application/json'});
     return this.httpClient.post(this.rootUrl + 'api/Accommodations', body, {headers : headersOption});
    }

     // get Accommodation information
      getalltheAccommodation(): Observable<AccommodationModel[]>{
        return this.httpClient.get<AccommodationModel[]>(this.rootUrl+'api/Accommodations');
      }
      /// get Accomodation by UserID //
      getAccommodation() : Observable<AccommodationModel[]>{
        return this.httpClient.get<AccommodationModel[]>(this.rootUrl+'api/GetAccommodation?id='+localStorage.getItem("UserID"));
      }

       //GET ALL THE ACCOMMODATION

      getALLTHEAccommodationbylist(): Observable<AccommodationModel[]>{
       return this.httpClient.get<AccommodationModel[]>(this.rootUrl+'GetAccommodationlist');
 
      }


      //update Accommodation information method

    UpdateAccommodation(id,accomodationmodel){
        var body = JSON.stringify(accomodationmodel);
        var headersOption = new HttpHeaders({'Content-Type':'application/json'});
        return this.httpClient.put(this.rootUrl +'api/Accommodations/'+id,body, {headers : headersOption});
      }

      //delete Accommodations information
      DeleteAccommodation(id : number)
      {
        return this.httpClient.delete(this.rootUrl+'api/Accommodations/'+id);
      }
}
