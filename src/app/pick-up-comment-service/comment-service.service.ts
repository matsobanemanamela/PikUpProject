import { Injectable } from '@angular/core';
import {CommentServiceModel} from '../pick-up-comment-models/comment-service-model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, Subject, ReplaySubject, from, of, range, BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentServiceService {
  readonly rootUrl = "http://localhost:52539/";


  commentServiceModel : CommentServiceModel;

  constructor( private httpClient : HttpClient) { }

  PostCommentService(commentServiceModel : CommentServiceModel){
    var body = JSON.stringify(commentServiceModel);
    var headersOption = new HttpHeaders({'Content-Type':'application/json'});
     return this.httpClient.post(this.rootUrl + 'api/CommentServices', body, {headers : headersOption});
    }

    getallCommentService(): Observable<CommentServiceModel[]>
    {
      return this.httpClient.get<CommentServiceModel[]>(this.rootUrl+'api/CommentServices');
    }

     // get CommentService information
      getCommentService() : Observable<CommentServiceModel[]>
      {
        return this.httpClient.get<CommentServiceModel[]>(this.rootUrl+'api/GetCommentServices?id='+localStorage.getItem(""));
      }

      //update CommentService

    UpdateCommentService(id,commentServiceModel){
        var body = JSON.stringify(commentServiceModel);
        var headersOption = new HttpHeaders({'Content-Type':'application/json'});
        return this.httpClient.put(this.rootUrl +'api/CommentServices/'+id,body,{headers : headersOption});
      }

      DeleteCommentService(id : number)
      {
        return this.httpClient.delete(this.rootUrl + 'api/CommentServices/'+id);
      }
}
