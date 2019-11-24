import { Component, OnInit } from '@angular/core';
import { ListUserService } from '../service/list-user.service';

@Component({
  selector: 'app-forgetpass',
  templateUrl: './forgetpass.component.html',
  styleUrls: ['./forgetpass.component.css']
})
export class ForgetpassComponent implements OnInit {

  constructor(private _ListUser: ListUserService) { }

  listStudent: any;
  checkpass: boolean = false;
  listForget = {
    username: null,
    password: null,
    email: null
  }

  ngOnInit() {
    this._ListUser.getstudent().subscribe(data => {
      this.listStudent = data;
    });
  }

  forgotstudent() {
    let checkinfor: any;
    this._ListUser.getstudent().subscribe(data => {
      this.listStudent = data;
      this.listStudent.forEach(element => {
        if (this.listForget.username == element.username && this.listForget.email == element.email) {
          this.listForget.password = element.password;
          checkinfor = false;
        }
      });
      if (checkinfor == false) {
        this.checkpass = true;
      } else {
        window.alert("Email hoặc tài khoản không đúng ")
      }
    });
  }
}
