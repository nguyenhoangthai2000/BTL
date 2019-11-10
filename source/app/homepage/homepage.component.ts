import { Component, OnInit } from '@angular/core';
import {ListSubjectService} from '../service/list-subject.service';
import {Router, ActivatedRoute } from '@angular/router';
import { ListUserService } from '../service/list-user.service';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {


  constructor(
    private _listsubject:ListSubjectService,
    private router:Router, 
    private route:ActivatedRoute,
    private _listUserComponent:ListUserService) { }

  itemsperpage = 4
  currentpage = 1
  totalpage : number;
  listsubject:any;
  listmonhoc:any;
  studentId:any;
  listUsers:any;
  nameStudent:any;
  showName: boolean = false;

  previouspage() {
    if (this.currentpage > 1)
      this.currentpage--;
    else
      return;
  }

  nextpage()
  {
    if(this.currentpage<5)
      this.currentpage++;
  }

  pagenow(choosenpage){
    this.currentpage= choosenpage;
  }
  
  ngOnInit() {
    this.listsubject=this._listsubject.subject;
    this.listmonhoc=this._listsubject.monhoc;
    this.route.paramMap.subscribe(param => {
      this.studentId = param.get("hId");
    });
    this._listUserComponent.getstudent().subscribe(data => {
      this.listUsers = data;
      this.listUsers.forEach(item => {
        if(this.studentId == item.id){
          this.showName = true;
          this.nameStudent = item.fullname;
        }
      });
    });
  }

  doSubject(idName){
    if(this.studentId == null){
     window.alert("Hãy đăng nhập để làm bài thi !!!") 
    }
    else{
      this._listUserComponent.getstudent().subscribe(data => {
        this.listUsers = data;
        this.listUsers.forEach(item => {
          if(this.studentId == item.id){
            this.router.navigate([`/exam/`+this.studentId+`/`+idName]);
          }
        });
      });
    }
  
  }

  updateInforStudent(){
    this.router.navigate(['/taikhoan',this.studentId])
  }
}
