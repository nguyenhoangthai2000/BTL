import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ListUserService } from '../service/list-user.service';
import { student } from '../student';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
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
  liststudent: any;

  constructor(private route: Router,
    private http: HttpClient,
    private _ListUser: ListUserService) { }

  ngOnInit() {
    this._ListUser.getstudent().subscribe(data => {
      this.liststudent = data;
    });
  }
  show(){
    let checkinfor = true;
    this.liststudent.forEach(hocsinh => {
      if(this.students.email === hocsinh.email ){
        window.alert("Tài khoản này đã được sử dụng")
        checkinfor = false;
        return
      }
    });
    if(checkinfor == true){
      this.post();
    }
  }
  post(){
    let newstudent = {
      username:this.students.username,
      fullname:this.students.fullname,
      email:this.students.email,
      password:this.students.password,
    }
    this.http.post("https://cuong-dev1-api.herokuapp.com/studentsTwo",newstudent).subscribe(data =>{
      this.route.navigate['/dangnhap'];
    });
  }
}

