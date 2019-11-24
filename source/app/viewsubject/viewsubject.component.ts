import { Component, OnInit } from '@angular/core';
import { ListObjectService } from '../service/list-object.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ListSubjectService } from '../service/list-subject.service';
import { ListUserService } from '../service/list-user.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-viewsubject',
  templateUrl: './viewsubject.component.html',
  styleUrls: ['./viewsubject.component.css']
})
export class ViewsubjectComponent implements OnInit {

  IdSubject: any;
  IdStudentPresent: any = null;
  NameSubject: any;
  LogoSubject:any;
  Listsubject: any;
  Listuser:any;
  ///////////////////
  checkId: boolean = false;

  constructor(
    private router:Router,
    private _listquestion: ListObjectService, 
    private _listuser: ListUserService, 
    private route: ActivatedRoute,
    private _ListSubject: ListSubjectService,
    private cookie: CookieService) { }

  ngOnInit() {
    //this.cookie.set("id", null);
    this.IdStudentPresent = this.cookie.get("id");
    console.log(this.IdStudentPresent);
    this.route.paramMap.subscribe(param => {
      this.IdSubject = param.get("Id");
    });
    this._ListSubject.getSubjectFromData().subscribe(data => {
      this.Listsubject = data;
      this.Listsubject.forEach(item => {
        if(this.IdSubject == item.Id){
          this.NameSubject = item.Name;
          this.LogoSubject = item.Logo;
        }
      });
    });
  }

  goExam(){
    if(this.IdStudentPresent == 'null' || this.IdStudentPresent == ''){
      window.alert("dang nhap de thi");
    }else{
      this._listuser.getstudent().subscribe(data => {
        this.Listuser = data;
        this.Listuser.forEach(item => {
          if(this.IdStudentPresent == item.id){
            this.router.navigate([`/exam/`+this.IdSubject]);     
          }
        });
      });
    }
    

  }

}
