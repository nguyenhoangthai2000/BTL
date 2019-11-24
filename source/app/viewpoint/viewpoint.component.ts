import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ListSubjectService } from '../service/list-subject.service';
import { ListUserService } from '../service/list-user.service';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-viewpoint',
  templateUrl: './viewpoint.component.html',
  styleUrls: ['./viewpoint.component.css']
})
export class ViewpointComponent implements OnInit {

  constructor(
    private router: Router,
    private _listSubject: ListSubjectService,
    private _listUser: ListUserService,
    private cookie: CookieService,
    private route: ActivatedRoute
  ) { }

  showtable: boolean = true;
  idStudent: any;
  idSubject: any;
  listStudent: any;

  student = {
    fullname: null,
    email: null,
    birthday: null,
    marks: []
  }

  ngOnInit() {
    let check: boolean = true;
    this.idStudent = this.cookie.get("id");
    if (this.idStudent == 'null' || this.idStudent == '') {
      check = false;
    } else {
      this._listUser.getstudent().subscribe(data => {
        this.listStudent = data;
        this.listStudent.forEach(item => {
          if (this.idStudent == item.id) {
            this.student = item;
          }
        });
      });
      check = true;
    }

    if (check == true) {
      this.showtable = true;
    } else {
      this.showtable = false;
    }
  }
  checkMail: boolean = false;
  chechAndView() {
    
    this._listUser.getstudent().subscribe(data => {
      this.listStudent = data;
      for(let i=0;i<this.listStudent.length;i++){
        if(this.student.email == this.listStudent[i].email){
          this.student = this.listStudent[i];
          this.checkMail = true;
          break;
        }
      }
      if (this.checkMail == false) {    
        window.alert("Email khong chinh xac!"); 
        this.showtable = false;
      } else {
       
        this.showtable = true;
      }
    });

    
  }
}
