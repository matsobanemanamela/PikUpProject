import { Injectable } from '@angular/core';
import {TransportModel} from '../pick-up-models/transport-model';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { Observable, Subject, ReplaySubject, from, of, range, BehaviorSubject} from 'rxjs';
import { map,mergeMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TransportServiceService {

  readonly rootUrl = "http://localhost:52539/";
  
  transportmodel : TransportModel;
 

  constructor(private httpClient : HttpClient) { }

  Posttransport(transportmodel : TransportModel){
    var body = JSON.stringify(transportmodel);
    var headersOption = new HttpHeaders({'Content-Type':'application/json'});
     return this.httpClient.post(this.rootUrl + 'api/Transports', body, {headers : headersOption});
    }
  
    //  get all  the transportation information

      getallthetransport(): Observable<TransportModel[]>{
        return this.httpClient.get<TransportModel[]>(this.rootUrl+'api/GeteveryTransportationdetails');
      }
     // get all transportation information by id 

      gettransport():Observable<TransportModel[]>{
        return this.httpClient.get<TransportModel[]>(this.rootUrl+'api/GetTransportationdetails?id='+localStorage.getItem("CustomerID"));
      }

  
    //update information
  
    Updatetransport(id,transportmodel){
        var body = JSON.stringify(transportmodel);
        var headersOption = new HttpHeaders({'Content-Type':'application/json'});
        return this.httpClient.put(this.rootUrl +'api/Transports/'+id,body,{headers : headersOption});
      }

    // delete information

    DeleteProduct(id : number)
    {
      return this.httpClient.delete(this.rootUrl +'api/Transports/'+id);
    }

}
