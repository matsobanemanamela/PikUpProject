import { Injectable } from '@angular/core';
import {CommentBooksModel} from '../pick-up-comment-models/comment-books-model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, Subject, ReplaySubject, from, of, range, BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentBooksService {
  readonly rootUrl = "http://localhost:52539/";


  commentBooksModel : CommentBooksModel;
;

  constructor( private httpClient : HttpClient) { }

  PostCommentBooks(commentBooksModel : CommentBooksModel){
    var body = JSON.stringify(commentBooksModel);
    var headersOption = new HttpHeaders({'Content-Type':'application/json'});
     return this.httpClient.post(this.rootUrl + 'api/CommentBooks', body, {headers : headersOption});
    }

    getallCommentBooks() : Observable<CommentBooksModel[]>
    {
      return this.httpClient.get<CommentBooksModel[]>(this.rootUrl+'api/Accommodations');
    }


      getCommentBooks(): Observable<CommentBooksModel[]>
      {
        return this.httpClient.get<CommentBooksModel[]>(this.rootUrl+'api/GetCommentBooks?id='+localStorage.getItem("commenbooki"));
      }

      //update CommentBooksModel

    UpdateCommentBooks(id,commentBooksModel){
        var body = JSON.stringify(commentBooksModel);
        var headersOption = new HttpHeaders({'Content-Type':'application/json'});
        return this.httpClient.put(this.rootUrl +'api/CommentBooks/'+id,body,{headers : headersOption});
      }

      DeleteCommentBooks(id : number)
      {
        return this.httpClient.delete(this.rootUrl + 'api/CommentBooks/'+id);
      }
}
