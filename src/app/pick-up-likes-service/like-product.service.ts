import { Injectable } from '@angular/core';
import {LikeProductModel} from '../pick-up-likes-models/like-product-model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, Subject, ReplaySubject, from, of, range, BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LikeProductService {
  readonly rootUrl = "http://localhost:52539/";

  likeProductModel : LikeProductModel;


  constructor(private httpClient : HttpClient) { }

  PostLikeProduct(likeProductModel : LikeProductModel){
    var body = JSON.stringify(likeProductModel);
    var headersOption = new HttpHeaders({'Content-Type':'application/json'});
     return this.httpClient.post(this.rootUrl + 'api/LikeProducts', body,  {headers : headersOption});
    }

    getallLikeProduct() : Observable<LikeProductModel[]>
    {
      return this.httpClient.get<LikeProductModel[]>(this.rootUrl+'api/LikeProducts');
    }


    getLikeProduct() : Observable<LikeProductModel[]>
    {
        return this.httpClient.get<LikeProductModel[]>(this.rootUrl+'api/GetLikeProducts?id='+localStorage.getItem(""));
    }

    UpdateLikeProduct(id,likeProductModel){
        var body = JSON.stringify(likeProductModel);
        var headersOption = new HttpHeaders({'Content-Type':'application/json'});
        return this.httpClient.put(this.rootUrl +'api/LikeProducts/'+id,body,{headers : headersOption})
      }

      DeleteLikeProduct(id : number)
      {
        return this.httpClient.delete(this.rootUrl + 'api/LikeProducts/'+id);
      }

}
