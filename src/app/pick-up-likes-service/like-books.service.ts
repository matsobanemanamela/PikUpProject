import { Injectable } from '@angular/core';
import {LikeBooksModel} from '../pick-up-likes-models/like-books-model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, Subject, ReplaySubject, from, of, range, BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LikeBooksService {
  readonly rootUrl = "http://localhost:52539/";


  likeBooksModel : LikeBooksModel;


  constructor( private httpClient : HttpClient) { }

  PostLikeBooks(likeBooksModel : LikeBooksModel){
    var body = JSON.stringify(likeBooksModel);
    var headersOption = new HttpHeaders({'Content-Type':'application/json'});
     return this.httpClient.post(this.rootUrl + 'api/LikeBooks', body, {headers : headersOption});
    }

    getallLikeBooks() : Observable<LikeBooksModel[]>
    {
      return this.httpClient.get<LikeBooksModel[]>(this.rootUrl+'api/LikeBooks');
    }

     // get LikeBooks information

    getLikeBooks() : Observable<LikeBooksModel[]>
    {
        return this.httpClient.get<LikeBooksModel[]>(this.rootUrl+'api/GetLikeBooks?id='+localStorage.getItem(""));
    }


      //update LikeBooks

    UpdateLikeBooks(id,likeBooksModel){
        var body = JSON.stringify(likeBooksModel);
        var headersOption = new HttpHeaders({'Content-Type':'application/json'});
        return this.httpClient.put(this.rootUrl +'api/LikeBooks/'+id,body,{headers : headersOption});
      }

      DeleteLikeBooks(id : number)
      {
        return this.httpClient.delete(this.rootUrl + 'api/LikeBooks/'+id);
      }

}
