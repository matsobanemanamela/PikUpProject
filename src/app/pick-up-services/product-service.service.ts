import { Injectable } from '@angular/core';
import {ProductModel} from '../pick-up-models/product-model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, Subject, ReplaySubject, from, of, range, BehaviorSubject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  readonly rootUrl = "http://localhost:52539/";
  
  productmodel : ProductModel;

constructor( private httpClient : HttpClient) { }

PostProducts(productmodel : ProductModel){
  var body = JSON.stringify(productmodel);
  var headersOption = new HttpHeaders({'Content-Type':'application/json'});
   return this.httpClient.post(this.rootUrl + 'api/Products', body, {headers : headersOption});
  }

  getprod():Observable<ProductModel[]>{
    return this.httpClient.get<ProductModel[]>(this.rootUrl+'api/Products');
  }

    //get all the product 
    getalltheProducts():Observable<ProductModel[]>{
      return this.httpClient.get<ProductModel[]>(this.rootUrl+'api/Geteveyproduct')
     
    }
   // get user information
    getProductsByUserID():Observable<ProductModel[]>{
      return this.httpClient.get<ProductModel[]>(this.rootUrl+'api/GetProduct?id='+localStorage.getItem("CustomerID"));
    }
  

    //update user profile

  UpdateProducts(id,productmodel){
      var body = JSON.stringify(productmodel);
      var headersOption = new HttpHeaders({'Content-Type':'application/json'});
      return this.httpClient.put(this.rootUrl +'api/Products/'+id,body,{headers : headersOption});
    }

    DeleteProduct(id : number)
    {
      return this.httpClient.delete(this.rootUrl +'api/Products/'+id);
    }
}
