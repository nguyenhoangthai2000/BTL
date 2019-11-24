import { Component, OnInit } from '@angular/core';
import { ListUserService } from '../service/list-user.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {

  constructor(
    private router: Router,
    private _listUserStudent: ListUserService,
    private route: ActivatedRoute,
    private http: HttpClient,
    private cookie: CookieService) { }

  studentId: any;
  oldPass: any;
  newPass: any;
  reNewPass: any;
  listStudent: any;

  newStudent = {
    username: null,
    password: null,
    email: null,
  };
  ngOnInit() {
    this.studentId = this.cookie.get("id")
    this._listUserStudent.getstudent().subscribe(data => {
      this.listStudent = data;
      this.listStudent.forEach(element => {
        if (this.studentId == element.id) {
          this.newStudent = element;
        }
      });
    });
  }

  changePass() {
    this._listUserStudent.getstudent().subscribe(data => {
      this.listStudent = data;
      for (let i = 0; i < this.listStudent.length; i++) {
        if (this.listStudent[i].id == this.studentId) {
          if (this.oldPass == this.newStudent.password) {
            if (this.newPass == this.oldPass) {
              window.alert("Đây là mật khẩu cũ. Nhập lại mật khẩu mới !")
            } else if (this.newPass == this.reNewPass) {
              this.listStudent[i].password = this.reNewPass;
              this.http.put("https://cuong-dev1-api.herokuapp.com/studentsTwo/" + this.studentId, this.listStudent[i]).subscribe(data => {
                window.alert("Đổi mật khẩu thành công !!!")
                this.router.navigate(['/']);
              })
            }
            else{
              window.alert("Mật khẩu mới không trùng khớp !!!")
            }
          }
          else{
            window.alert("Sai mật khẩu !!!")
          }
        }
      }
    });
  }

}
