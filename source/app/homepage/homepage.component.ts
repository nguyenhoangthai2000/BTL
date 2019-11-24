import { Component, OnInit } from '@angular/core';
import { ListSubjectService } from '../service/list-subject.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ListUserService } from '../service/list-user.service';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {


  constructor(
    private _listsubject: ListSubjectService,
    private router: Router) { }

  itemsperpage = 4
  currentpage = 1;
  totalpage: number;
  listsubject: any;
  listmonhoc: any;
  studentId: any;
  listUsers: any;
  nameStudent: any;
  showName: boolean = false;

  previouspage() {
    if (this.currentpage > 1)
      this.currentpage--;
    else
      return;
  }
  nextpage() {
    if (this.currentpage < 5) {
      this.currentpage++;
    }
    else{
      this.currentpage == this.currentpage;
    }
  }
  pagenow(choosenpage) {
    this.currentpage = choosenpage;
  }

  ngOnInit() {
   
    this._listsubject.getSubjectFromData().subscribe(datas => {
      this.listsubject = datas;
    });
  }

  showSubject(item) {
    this.router.navigate([`/xemmonhoc/` + item]);
  }
}
