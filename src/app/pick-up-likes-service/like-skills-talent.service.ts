import { Injectable } from '@angular/core';
import {LikeSkillsTalentModel} from '../pick-up-likes-models/like-skills-talent-model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, Subject, ReplaySubject, from, of, range, BehaviorSubject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class LikeSkillsTalentService {

  readonly rootUrl = "http://localhost:52539/";

  likeSkillsTalentModel : LikeSkillsTalentModel;

  constructor(private httpClient : HttpClient) { }

  PostLikeSkillsTalent(likeSkillsTalentModel : LikeSkillsTalentModel){
    var body = JSON.stringify(likeSkillsTalentModel);
    var headersOption = new HttpHeaders({'Content-Type':'application/json'});
     return this.httpClient.post(this.rootUrl + 'api/LikeSkillsTalents', body, {headers : headersOption});
    }

    getallLikeSkillsTalent() : Observable<LikeSkillsTalentModel[]>
    {
      return this.httpClient.get<LikeSkillsTalentModel[]>(this.rootUrl+'api/LikeSkillsTalents');
    }

     // get LikeProduct information

    getLikeSkillsTalent(): Observable<LikeSkillsTalentModel[]>
    {
        return this.httpClient.get<LikeSkillsTalentModel[]>(this.rootUrl+'api/GetLikeSkillsTalents?id='+localStorage.getItem(""));
    }


      //update LikeProduct

    UpdateLikeSkillsTalent(id,likeSkillsTalentModel){
        var body = JSON.stringify(likeSkillsTalentModel);
        var headersOption = new HttpHeaders({'Content-Type':'application/json'});
        return this.httpClient.put(this.rootUrl +'api/LikeSkillsTalents/'+id,body,{headers : headersOption});
      }

      DeleteLikeSkillsTalent(id : number)
      {
        return this.httpClient.delete(this.rootUrl + 'api/LikeSkillsTalents/'+id);
      }

}
