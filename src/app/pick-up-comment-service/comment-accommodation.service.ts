import { Injectable } from '@angular/core';
// import * as io from 'socket.io-client';
import {CommentAccommodationModel} from '../pick-up-comment-models/comment-accommodation-model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, Subject, ReplaySubject, from, of, range, BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentAccommodationService {
  readonly rootUrl = "http://localhost:52539/";

  commentAccommodationModel : CommentAccommodationModel;

  // private socket = io('http://localhost:5000');
  constructor( private httpClient : HttpClient) { }

  PostCommentAccommodation(commentAccommodationModel : CommentAccommodationModel){
    var body = JSON.stringify(commentAccommodationModel);
    var headersOption = new HttpHeaders({'Content-Type':'application/json'});
     return this.httpClient.post(this.rootUrl + 'api/CommentAccommodations', body, {headers : headersOption});
    }

    getallCommentAccommodation() : Observable<CommentAccommodationModel[]>
    {
      return this.httpClient.get<CommentAccommodationModel[]>(this.rootUrl+'api/CommentAccommodations');
    }

     // get user information
      getCommentAccommodation(){
        return this.httpClient.get(this.rootUrl+'api/GetCommentAccommodations?id='+localStorage.getItem("example1"))
      }

      //update user profile

    UpdateCommentAccommodation(id,commentAccommodationModel){
        var body = JSON.stringify(commentAccommodationModel);
        var headersOption = new HttpHeaders({'Content-Type':'application/json'});
        return this.httpClient.put(this.rootUrl +'api/CommentAccommodations/'+id,body,{headers : headersOption});
      }

      DeleteCommentAccommodation(id : number)
      {
        return this.httpClient.delete(this.rootUrl + 'api/CommentAccommodations/'+id);
      }

}
