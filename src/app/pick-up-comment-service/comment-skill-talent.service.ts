import { Injectable } from '@angular/core';
import {CommentSkillsAndTalentModel} from '../pick-up-comment-models/comment-skills-and-talent-model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, Subject, ReplaySubject, from, of, range, BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentSkillTalentService {
  readonly rootUrl = "http://localhost:52539/";


  commentSkillsAndTalentModel : CommentSkillsAndTalentModel;


  constructor( private httpClient : HttpClient) { }

  PostcommentSkillsAndTalent(commentSkillsAndTalentModel : CommentSkillsAndTalentModel){
    var body = JSON.stringify(commentSkillsAndTalentModel);
    var headersOption = new HttpHeaders({'Content-Type':'application/json'});
     return this.httpClient.post(this.rootUrl + 'api/CommentSkillTalents', body, {headers : headersOption});
    }

    getallcommentSkillsAndTalent() : Observable<CommentSkillsAndTalentModel[]>
    {
      return this.httpClient.get<CommentSkillsAndTalentModel[]>(this.rootUrl+'api/CommentSkillTalents');
    }

     // get commentSkillsAndTalent information
      getcommentSkillsAndTalent() : Observable<CommentSkillsAndTalentModel[]>
      {
        return this.httpClient.get<CommentSkillsAndTalentModel[]>(this.rootUrl+'api/GetCommentSkillTalents?id='+localStorage.getItem(""));
      }


      //update commentSkillsAndTalent

    UpdatecommentSkillsAndTalent(id,commentSkillsAndTalentModel){
        var body = JSON.stringify(commentSkillsAndTalentModel);
        var headersOption = new HttpHeaders({'Content-Type':'application/json'});
        return this.httpClient.put(this.rootUrl +'api/CommentSkillTalents/'+id,body,{headers : headersOption});
      }

      DeletecommentSkillsAndTalent(id : number)
      {
        return this.httpClient.delete(this.rootUrl + 'api/CommentSkillTalents/'+id);
      }
}
