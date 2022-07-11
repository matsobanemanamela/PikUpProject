import { Component, OnInit } from '@angular/core';
import {Router} from'@angular/router';
import {ToastrService} from 'ngx-toastr';
import {NgForm} from '@angular/forms';
import {TalentAndSkillsModel} from '../pick-up-models/talent-and-skills-model';
import {SkillsAndTalentServiceService} from '../pick-up-services/skills-and-talent-service.service';
import { HttpClient } from '@angular/common/http';
import { map,mergeMap} from 'rxjs/operators';
const URL = 'http://localhost:3000/files';

@Component({
  selector: 'app-add-skills-and-talent',
  templateUrl: './add-skills-and-talent.component.html',
  styleUrls: ['./add-skills-and-talent.component.css'],
  providers : [SkillsAndTalentServiceService]
})
export class AddSkillsAndTalentComponent implements OnInit {

  talentandskillmodel : TalentAndSkillsModel;
  talentandskillmodelList : TalentAndSkillsModel[];
  Imageurl : string = "/assets/default_profile_image.png";
  vide : string;
  fileToUpload : File = null;
  selectedFile: File = null;
  fd = new FormData();
  constructor(private skillsandtalentservice : SkillsAndTalentServiceService,private toaster : ToastrService,private route : Router,private http: HttpClient) { }

  ngOnInit() {
    this.skillsandtalentservice.gettalentandskill().subscribe((data:any) => { this.talentandskillmodelList = data});
    this.skillsandtalentservice.getallthetalentandskill().subscribe((data:any) => { this.talentandskillmodelList = data});
    this.resetForm();
  }

  resetForm(form? : NgForm){

    if(form != null)
    form.reset();

    this.talentandskillmodel={

    skillandtalentID : 0,
    UserID : +localStorage.getItem("CustomerID"),
    TypeofskillORtalent : '',
    Image :'',
    Video : '',
    Song : '',
    Comment : ''

    }
  }

  createFormData(event) {
    this.selectedFile = <File>event.target.files[0];
    this.fd.append('photo', this.selectedFile, this.selectedFile.name);
  }

  handleFileInput(file : FileList){

    this.fileToUpload = file.item(0);
    var reader = new FileReader();
    reader.onload = (event:any) =>{
    this.Imageurl = event.target.result;
    }
  reader.readAsDataURL(this.fileToUpload);

  this.talentandskillmodel.Image = this.fileToUpload.name;
  }

   handleFileInputVideo(file : FileList){

    this.fileToUpload = file.item(0);
    var reader = new FileReader();
    reader.onload = (event:any) =>{
      this.vide = event.target.result;
    }
  reader.readAsDataURL(this.fileToUpload);
  console.log(this.fileToUpload.name)
  this.talentandskillmodel.Video = this.fileToUpload.name;
  }

  handleFileInputMP3(file : FileList){

    this.fileToUpload = file.item(0);
    var reader = new FileReader();
    reader.onload = (event:any) =>{
      this.vide = event.target.result;
    }
  reader.readAsDataURL(this.fileToUpload);
  console.log(this.fileToUpload.name)
  this.talentandskillmodel.Song = this.fileToUpload.name;
  }


        onSubmit(form? : NgForm){
      // NODE JS SERVER
      this.http.post(URL, this.fd).pipe(map((res:Response) => res.json())).subscribe(
        (success) => {

       },
       (error) => alert(error));
// C# BACK END

          this.skillsandtalentservice.Posttalentandskill(form.value)
          .subscribe((data:any) => {
              if (data.Succeeded == true)
             this.resetForm(form);
              this.toaster.success('your Service details are successfully saved');
              location.reload();
             });
        }

        UpdateSkillsandTalent(form? : NgForm){
            // NODE JS SERVER
            this.http.post(URL, this.fd).pipe(map((res:Response) => res.json())).subscribe(
              (success) => {

             },
             (error) => alert(error));
      // C# BACK END

          this.skillsandtalentservice.Updatetalentandskill(form.value.skillandtalentID, form.value)
          .subscribe(data => {
            this.resetForm(form);
           //this.userdetailComponent.getUserClaims();
            this.toaster.info('Record Updated Successfully');
            location.reload();
          ;
          })
        }

        showForEdit(talentandskillmodels : TalentAndSkillsModel){
          this.talentandskillmodel = Object.assign({}, talentandskillmodels);
        }


        onDelete(id : number){
          if(confirm("are you sure you want to delete?")==true){
            this.skillsandtalentservice.Deletetalentandskill(id).subscribe(x =>{
              this.skillsandtalentservice.getallthetalentandskill();
            this.toaster.warning('Deleted Successfully');
            }
          )
          }
        }


}
