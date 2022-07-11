import { Injectable } from '@angular/core';
import {LikeServiceModel} from '../pick-up-likes-models/like-service-model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, Subject, ReplaySubject, from, of, range, BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LikeServiceService {
  readonly rootUrl = "http://localhost:52539/";


  likeServiceModel : LikeServiceModel;

  constructor( private httpClient : HttpClient) { }

  PostLikeService(likeServiceModel : LikeServiceModel){
    var body = JSON.stringify(likeServiceModel);
    var headersOption = new HttpHeaders({'Content-Type':'application/json'});
     return this.httpClient.post(this.rootUrl + 'api/LikeServices', body, {headers : headersOption});
    }

    getallLikeService() : Observable<LikeServiceModel[]>
    {
      return this.httpClient.get<LikeServiceModel[]>(this.rootUrl+'api/LikeServices');
    }

     // get LikeProduct information

    getLikeService() : Observable<LikeServiceModel[]>
    {
        return this.httpClient.get<LikeServiceModel[]>(this.rootUrl+'api/GetLikeServices?id='+localStorage.getItem(""));
    }


      //update LikeProduct

    UpdateLikeService(id,likeServiceModel){
        var body = JSON.stringify(likeServiceModel);
        var headersOption = new HttpHeaders({'Content-Type':'application/json'});
        return this.httpClient.put(this.rootUrl +'api/LikeServices/'+id,body, {headers : headersOption});
      }

      DeleteLikeService(id : number)
      {
        return this.httpClient.delete(this.rootUrl + 'api/LikeServices/'+id);
      }

}
