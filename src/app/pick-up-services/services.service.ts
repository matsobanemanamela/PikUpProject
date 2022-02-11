import { Injectable } from '@angular/core';
import {ServiceModel} from '../pick-up-models/service-model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, Subject, ReplaySubject, from, of, range, BehaviorSubject} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  readonly rootUrl = "http://localhost:52539/";

  servicemodel : ServiceModel;
  

  constructor(private httpClient : HttpClient) { }

  Postservice(servicemodel : ServiceModel){
   
    var body = JSON.stringify(servicemodel);
    var headersOption = new HttpHeaders({'Content-Type':'application/json'});
     return this.httpClient.post(this.rootUrl + 'api/Services', body, {headers : headersOption});
    }
  
    getallserv():Observable<ServiceModel[]>{
      return this.httpClient.get<ServiceModel[]>(this.rootUrl+'api/Services');
    }
    // get all the serviecs
      getallService():Observable<ServiceModel[]>{
        return this.httpClient.get<ServiceModel[]>(this.rootUrl+'api/GeteveryService');
       
      }

     /////// get  all service by id/////////////////
      getService():Observable<ServiceModel[]>{
        return this.httpClient.get<ServiceModel[]>(this.rootUrl+'api/GetService?id='+localStorage.getItem("CustomerID"));
      }
    

  
      //update  information
  
    Updateservice(id,servicemodel){
        var body = JSON.stringify(servicemodel);
        var headerOptions = new HttpHeaders({'Content-Type': 'application/json'});
        return this.httpClient.put(this.rootUrl +'api/Services/'+id,body,{headers : headerOptions});
      }

      //delete information

      DeleteService(id : number)
      {
        return this.httpClient.delete(this.rootUrl +'api/Services/'+id);
      }
}
