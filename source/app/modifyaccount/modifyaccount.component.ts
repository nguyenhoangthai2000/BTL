import { Component, OnInit } from '@angular/core';
import { ListUserService } from '../service/list-user.service';

import { from } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
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
    private route: ActivatedRoute) { }

  students = {
    id: null,
    username: null,
    password: null,
    fullname: null,
    email: null,
    gender: null,
    birthday: null,
    schoolfee: null
  }

  studentID: any;
  liststudent: any;

  ngOnInit() {
    this.route.paramMap.subscribe(param => {
      this.studentID = param.get("Id");
    });
    this._ListUserStudent.getstudent().subscribe(data => {
      this.liststudent = data;
      this.liststudent.forEach(item => {
        if (this.studentID == item.id) {
          this.students.id = item.id;
          this.students.username = item.username;
          this.students.email = item.email;
          this.students.birthday = item.birthday;
          this.students.password = item.password;
          this.students.schoolfee = item.schoolfee;
          this.students.gender = item.gender;
          this.students.fullname = item.fullname;
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
      email: this.students.email,
      gender: this.students.gender,
      birthday: this.students.birthday,
      schoolfee: this.students.schoolfee
    }
    this.http.put("https://cuong-dev1-api.herokuapp.com/studentsTwo/" + this.studentID + "", updateStudent).subscribe(data => {
      this.router.navigate(['/home/', this.studentID]);
    });
  }
}
