import { Injectable } from '@angular/core';
import {CommentTransportModel} from '../pick-up-comment-models/comment-transport-model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, Subject, ReplaySubject, from, of, range, BehaviorSubject} from 'rxjs';
import { core } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class CommentTransportService {
  readonly rootUrl = "http://localhost:52539/";


  selectedCommentTransportModel : CommentTransportModel;
  commentTransportModel : CommentTransportModel;

  constructor(private httpClient : HttpClient) { }

  PostCommentTransport(commentTransportModel : CommentTransportModel){
    var body = JSON.stringify(commentTransportModel);
    var headersOption = new HttpHeaders({'Content-Type':'application/json'});
     return this.httpClient.post(this.rootUrl + 'api/CommentTransports', body, {headers : headersOption});
    }

    getallCommentTransport(): Observable<CommentTransportModel[]>
    {
      return this.httpClient.get<CommentTransportModel[]>(this.rootUrl+'api/CommentTransports');
    }

     // get CommentTransport information
      getCommentTransport() : Observable<CommentTransportModel[]>{
        return this.httpClient.get<CommentTransportModel[]>(this.rootUrl+'api/GetCommentTransports?id='+localStorage.getItem(""));
      }


      //update CommentTransport

    UpdateCommentTransport(id,commentTransportModel){
        var body = JSON.stringify(commentTransportModel);
        var headersOption = new HttpHeaders({'Content-Type':'application/json'});
        return this.httpClient.put(this.rootUrl +'api/CommentTransports/'+id,body,{headers : headersOption});
      }

      DeleteCommentTransport(id : number)
      {
        return this.httpClient.delete(this.rootUrl + 'api/CommentTransports/'+id);
      }

}
