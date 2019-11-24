import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ListUserService } from '../service/list-user.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(
    private _ListUser: ListUserService, 
    private cookie: CookieService,
    private router: Router
    ) { }

  idStudent:any;
  listStudents:any;
  nameStudent:any;

  checkAcc: boolean = false;

  ngOnInit() {
    
    this.idStudent = this.cookie.get("id");
    this._ListUser.getstudent().subscribe(data => {
      this.listStudents = data;
      
      this.listStudents.forEach(item => {
        if(this.idStudent == item.id){
          this.nameStudent = item.fullname;
          this.checkAcc = true;
        }
      });
    });
  }

  outAccount(){
    this.cookie.set("id", null);
    this.router.navigate(['/']);
  }
  inAccount(){
    this.router.navigate(['/dangnhap']);
  }
}
