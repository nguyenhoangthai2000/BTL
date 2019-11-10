import { Component, OnInit } from '@angular/core';
import { ListUserService } from '../service/list-user.service';

@Component({
  selector: 'app-forgetpass',
  templateUrl: './forgetpass.component.html',
  styleUrls: ['./forgetpass.component.css']
})
export class ForgetpassComponent implements OnInit {

  constructor(private _ListUser: ListUserService) { }
  liststudent: any;
  checkpass: boolean = false;
  listforget = {
    username: null,
    password: null,
    email: null,
  }
  ngOnInit() {
    this._ListUser.getstudent().subscribe(data => {
      this.liststudent = data;
    });
  }
  forgotstudent() {
    let checkinfor: any;
    this.liststudent.forEach(element => {
      if (this.listforget.username == element.username && this.listforget.email == element.email) {
        this.listforget.password = element.password;
        checkinfor = false;
      }
    });
    if (checkinfor == false) {
      this.checkpass = true;
    } else {
      window.alert("Email hoặc tài khoản không đúng ")
    }
  }
}
