import { Component, OnInit } from '@angular/core';
import { ListUserService } from '../service/list-user.service';

import { from } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-modifyaccount',
  templateUrl: './modifyaccount.component.html',
  styleUrls: ['./modifyaccount.component.css']
})
export class ModifyaccountComponent implements OnInit {

  constructor(
    private _ListUserStudent: ListUserService,
    private router: Router,
    private http: HttpClient,
    private cookie: CookieService) { }

  students = {
    id: null,
    username: null,
    password: null,
    fullname: null,
    email: null,
    gender: null,
    birthday: null,
    schoolfee: null,
    age: null,
    marks: []
  }

  studentID: any;
  listStudent: any;

  ngOnInit() {
    this.studentID = this.cookie.get("id");
    this._ListUserStudent.getstudent().subscribe(data => {
      this.listStudent = data;
      this.listStudent.forEach(item => {
        if (this.studentID == item.id) {
          this.students = item;
          if (item.gender == "true") {
            this.students.gender = "Nam";
          } else {
            this.students.gender = "Nữ";
          }
        }
      });
    });
  }

  addInforStudent() {
    if (this.students.gender == "Nam") {
      this.students.gender = "true";
    } else {
      this.students.gender = "false";
    }
    let updateStudent = {
      id: this.students.id,
      username: this.students.username,
      password: this.students.password,
      fullname: this.students.fullname,
      age: this.students.age,
      email: this.students.email,
      gender: this.students.gender,
      birthday: this.students.birthday,
      schoolfee: this.students.schoolfee,
      marks: this.students.marks,
    }
    this.http.put("https://cuong-dev1-api.herokuapp.com/studentsTwo/" + this.studentID + "", updateStudent).subscribe(data => {
      this.router.navigate(['/']);
    });
  }
}
