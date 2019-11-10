import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListUserService } from '../service/list-user.service';
import { student } from '../student'
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(
    private route:Router,
    private _ListUser:ListUserService,
    private http:HttpClient
    ) { }
  students: student = {
    id: null,
    username: null,
    password: null,
    fullname: null,
    email: null,
    gender: null,
    birthday: null,
    address: null,
    mark: null,
  }
  liststudents: any;
  ngOnInit() {
    this._ListUser.getstudent().subscribe(data => {
      this.liststudents = data;
    });
  }

  getStudentFromInput() {
    let checkinfor = false;
    this.liststudents.forEach(API => {
      if (this.students.username === API.username && this.students.password === API.password) {
        window.alert("Bạn đã đăng nhập thành công");
        this.students.id = API.id;
        this.route.navigate(['/home/',this.students.id]);
        checkinfor = true;
      }
    });
    if (checkinfor == false) {
      window.alert("Bạn đã nhập sai tài khoản hoặc mật khẩu")
    }
  }
}
