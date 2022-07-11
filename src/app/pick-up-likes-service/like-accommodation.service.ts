import { Injectable } from '@angular/core';
import {LikeAccommodationModel} from '../pick-up-likes-models/like-accommodation-model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, Subject, ReplaySubject, from, of, range, BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LikeAccommodationService {
  readonly rootUrl = "http://localhost:52539/";


  likeAccommodationModel : LikeAccommodationModel;


  constructor( private httpClient : HttpClient) { }

  PostLikeAccommodation(likeAccommodationModel : LikeAccommodationModel){
    var body = JSON.stringify(likeAccommodationModel);
    var headersOption = new HttpHeaders({'Content-Type':'application/json'});
     return this.httpClient.post(this.rootUrl + 'api/LikeAccommodations', body, {headers : headersOption});
    }

    getallLikeAccommodation() : Observable<LikeAccommodationModel[]>
    {
      return this.httpClient.get<LikeAccommodationModel[]>(this.rootUrl+'api/LikeAccommodations');
    }

     // get LikeAccommodation information
      getLikeAccommodation() : Observable<LikeAccommodationModel[]>
      {
        return this.httpClient.get<LikeAccommodationModel[]>(this.rootUrl+'api/GetLikeAccommodations?id='+localStorage.getItem(""));
      }


      //update LikeAccommodation

    UpdateLikeAccommodation(id,likeAccommodationModel){
        var body = JSON.stringify(likeAccommodationModel);
        var headersOption = new HttpHeaders({'Content-Type':'application/json'});
        return this.httpClient.put(this.rootUrl +'api/LikeAccommodations/'+id,body,{headers : headersOption});
      }

      DeleteLikeAccommodation(id : number)
      {
        return this.httpClient.delete(this.rootUrl + 'api/LikeAccommodations/'+id);
      }

}
