import { Component, OnInit } from '@angular/core';
import { ListObjectService } from '../service/list-object.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ListSubjectService } from '../service/list-subject.service';
import { ListUserService } from '../service/list-user.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {

  curPage: Number = 1;
  itemPerPage: Number = 1;
  //////////////////
  lessonId: any;
  IdStudentPresent: any;
  listQuestion: any;
  NameSubject: any;
  Listsubject: any;
  /////////////
  ListAns: any = [];
  Questioned = 0;
  RightQues = 0;
  point: any;
  ListUser: any;
  NameStudent: any;

  constructor(
    private router:Router,
    private _ListQuestion: ListObjectService, 
    private _ListUser: ListUserService, 
    private route: ActivatedRoute, 
    private http: HttpClient, 
    private _ListSubject: ListSubjectService,
    private cookie: CookieService) {

  }
  ngOnInit() {
    this.route.paramMap.subscribe(param => {
      this.lessonId = param.get("Id");
      this._ListQuestion.getObjectsFromService(this.lessonId).subscribe(data => {
        this.listQuestion = data;
        for (let i = 0; i < this.listQuestion.length; i++) {
          this.ListAns[i] = {
            IdQues: this.listQuestion[i].Id,
            IdQuesRight: this.listQuestion[i].AnswerId,
            IdAnswer: null
          }
        }
      });
    });
    this.IdStudentPresent = this.cookie.get("id");
    this._ListSubject.subject.forEach(item => {
      if (this.lessonId == item.Id) {
        this.NameSubject = item.Name;
      }
    });
  }
  check(QuesInput, AnsInput) {
    for (let i = 0; i < this.ListAns.length; i++) {
      if (this, this.ListAns[i].IdQues == QuesInput) {
        this.ListAns[i].IdAnswer = AnsInput;
      }
    }
  }
  chamdiem() {
    for (let i = 0; i < this.ListAns.length; i++) {
      if (this.ListAns[i].IdAnswer == this.ListAns[i].IdQuesRight) {
        this.RightQues += 1;
      }
      if (this.ListAns[i].IdAnswer != null) {
        this.Questioned += 1;
      }
    }

    this.point = ((this.RightQues / this.ListAns.length) * 10).toFixed(2);
    this._ListUser.getstudent().subscribe(data => {
      this.ListUser = data;
      this.ListUser.forEach(item => {
        if (this.IdStudentPresent == item.id) {
          this.NameStudent = item.fullname;
        }
      });
      for (let i = 0; i < this.ListUser.length; i++) {
        if (this.ListUser[i].id == this.IdStudentPresent) {
          this.ListUser[i].marks.push({ Id: this.lessonId, Name: this.NameSubject, mark: this.point });
          this.http.put("https://cuong-dev1-api.herokuapp.com/studentsTwo/" + this.IdStudentPresent, this.ListUser[i]).subscribe(data => {
          console.log(this.point);
          })
        }
      }
    })
  }
  goHome(){
    this.router.navigate([`/home/`+this.IdStudentPresent]);
  }
}
