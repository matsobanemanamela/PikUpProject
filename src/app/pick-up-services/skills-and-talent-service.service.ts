import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, Subject, ReplaySubject, from, of, range, BehaviorSubject} from 'rxjs';
import {TalentAndSkillsModel} from '../pick-up-models/talent-and-skills-model';

@Injectable({
  providedIn: 'root'
})
export class SkillsAndTalentServiceService {

  readonly rootUrl = "http://localhost:52539/";
  talentandskillmodel : TalentAndSkillsModel;


  constructor( private httpClient : HttpClient) { }
  
  Posttalentandskill(talentandskillmodel : TalentAndSkillsModel){
    var body = JSON.stringify(talentandskillmodel);
    var headersOption = new HttpHeaders({'Content-Type':'application/json'});
     return this.httpClient.post(this.rootUrl + 'api/SkillsTalents', body,{headers : headersOption});
    }
  
    getskills(): Observable<TalentAndSkillsModel[]>{
      return this.httpClient.get<TalentAndSkillsModel[]>(this.rootUrl+'api/SkillsTalents');
    }


    /// get all the talent and skill information.

    getallthetalentandskill():Observable<TalentAndSkillsModel[]>{
        return this.httpClient.get<TalentAndSkillsModel[]>(this.rootUrl+'api/GeteverySkillsTalent');
    }


     /// get all skills and talent information by UserForiegn Key
     
      gettalentandskill():Observable<TalentAndSkillsModel[]>{
        return this.httpClient.get<TalentAndSkillsModel[]>(this.rootUrl+'api/GetSkillsTalent?id='+localStorage.getItem("CustomerID"));
      }


  
    Updatetalentandskill(id,talentandskillmodel){
        var body = JSON.stringify(talentandskillmodel);
        var headersOption = new HttpHeaders({'Content-Type':'application/json'});
        return this.httpClient.put(this.rootUrl +'api/SkillsTalents/'+id,body,{headers : headersOption});
      }
  
      Deletetalentandskill(id : number)
      {
        return this.httpClient.delete(this.rootUrl +'api/SkillsTalents/'+id);
      }
}
