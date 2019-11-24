import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListUserService } from '../service/list-user.service';
import { student } from '../student'
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(
    private router: Router,
    private _ListUser: ListUserService,
    private http: HttpClient,
    private cookie: CookieService) { }

  students: student = {
    id: null,
    username: null,
    password: null,
    fullname: null,
    email: null,
    gender: null,
    birthday: null,
    address: null,
    marks: null
  }
  idStudent: any;
  listStudents: any;

  ngOnInit() {

    this._ListUser.getstudent().subscribe(data => {
      this.listStudents = data;
    });
  }

  getStudentFromInput() {
    let checkinfor = false;
    this.listStudents.forEach(API => {
      if (this.students.username === API.username && this.students.password === API.password) {
        if(this.students.id = API.id){
          window.alert("Bạn đã đăng nhập thành công");                 
          checkinfor = true;
          this.cookie.set("id", `${this.students.id}`); 
          this.router.navigate(['/alsjfl']);
          // window.location.reload(true);        
        }
      }
    });
    if (checkinfor == false) {
      window.alert("Bạn đã nhập sai tài khoản hoặc mật khẩu")
    };
    
  }
}
