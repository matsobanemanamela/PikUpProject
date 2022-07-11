import { Injectable } from '@angular/core';
import {LikeTransportModel} from '../pick-up-likes-models/like-transport-model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, Subject, ReplaySubject, from, of, range, BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LikeTransportService {
  readonly rootUrl = "http://localhost:52539/";


  likeTransportModel : LikeTransportModel;


  constructor( private httpClient : HttpClient) { }

  PostLikeTransport(likeTransportModel : LikeTransportModel){
    var body = JSON.stringify(likeTransportModel);
    var headersOption = new HttpHeaders({'Content-Type':'application/json'});
     return this.httpClient.post(this.rootUrl + 'api/LikeTransports', body, {headers : headersOption});
    }

    getallLikeTransport(): Observable<LikeTransportModel[]>
    {
      return this.httpClient.get<LikeTransportModel[]>(this.rootUrl+'api/LikeTransports');
    }

     // get LikeTransport information

    getLikeTransport() : Observable<LikeTransportModel[]>
    {
        return this.httpClient.get<LikeTransportModel[]>(this.rootUrl+'api/GetLikeSkillsTalents?id='+localStorage.getItem(""));
    }



      //update LikeTransport

    UpdateLikeTransport(id,likeTransportModel){
        var body = JSON.stringify(likeTransportModel);
        var headersOption = new HttpHeaders({'Content-Type':'application/json'});
        return this.httpClient.put(this.rootUrl +'api/LikeTransports/'+id,body,{headers : headersOption});
      }

      DeleteLikeTransport(id : number)
      {
        return this.httpClient.delete(this.rootUrl + 'api/LikeTransports/'+id);
      }

}
