import { Injectable } from '@angular/core';
import {CommentProductModel} from '../pick-up-comment-models/comment-product-model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, Subject, ReplaySubject, from, of, range, BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentProductService {
  readonly rootUrl = "http://localhost:52539/";


  commentProductModel : CommentProductModel;


  constructor( private httpClient : HttpClient) { }

  PostCommentProduct(commentProductModel : CommentProductModel){
    var body = JSON.stringify(commentProductModel);
    var headersOption = new HttpHeaders({'Content-Type':'application/json'});
     return this.httpClient.post(this.rootUrl + 'api/CommentProducts', body, {headers : headersOption});
    }

    getallCommentProduct(): Observable<CommentProductModel[]>
    {
      return this.httpClient.get<CommentProductModel[]>(this.rootUrl+'api/CommentProducts');
    }

     // get CommentProduct information
      getCommentProduct(): Observable<CommentProductModel[]>
      {
        return this.httpClient.get<CommentProductModel[]>(this.rootUrl+'api/GetCommentProducts?id='+localStorage.getItem("producid"));
      }


      //update CommentProduct

    UpdateCommentProduct(id,commentProductModel){
        var body = JSON.stringify(commentProductModel);
        var headersOption = new HttpHeaders({'Content-Type':'application/json'});
        return this.httpClient.put(this.rootUrl +'api/CommentProducts/'+id,body,{headers : headersOption});
      }

      DeleteCommentProduct(id : number)
      {
        return this.httpClient.delete(this.rootUrl + 'api/CommentProducts/'+id);
      }
}
