import { Injectable } from '@angular/core';
import {BooksModel} from '../pick-up-models/books-model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, Subject, ReplaySubject, from, of, range, BehaviorSubject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BooksService {
  readonly rootUrl = "http://localhost:52539/";

 

  bookmodel : BooksModel;
  bookslist : BooksModel[];
  
  constructor(private httpClient : HttpClient) { }

  PostBook(bookmodel : BooksModel){
    var body = JSON.stringify(bookmodel);
    var headersOption = new HttpHeaders({'Content-Type':'application/json'});
     return this.httpClient.post(this.rootUrl + 'api/Books', body, {headers : headersOption});
    }

    getallbook(): Observable<BooksModel[]>
    {
      return this.httpClient.get<BooksModel[]>(this.rootUrl+'api/Books');
    }

//get all the books list method

      getallthebooks(): Observable<BooksModel[]>{
        return this.httpClient.get<BooksModel[]>(this.rootUrl+'api/GeteveryBooksDetails');
      }

     // get user information
      getbook(): Observable<BooksModel[]>{
        return this.httpClient.get<BooksModel[]>(this.rootUrl+'api/GetBooksDetails?id='+localStorage.getItem("CustomerID"));
      }


    Updatebooks(id,bookmodel){
        var body = JSON.stringify(bookmodel);
        var headersOption = new HttpHeaders({'Content-Type':'application/json'});
        return this.httpClient.put(this.rootUrl +'api/Books/'+id,body,{headers : headersOption});
    }


      DeleteBookings(id : number)
      {
        return this.httpClient.delete(this.rootUrl + 'api/Books/'+id);
      }
}
