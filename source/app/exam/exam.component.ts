import { Component, OnInit } from '@angular/core';
import { ListObjectService } from '../service/list-object.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ListSubjectService } from '../service/list-subject.service';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {

  curPage: Number = 1;
  itemPerPage: Number = 1;
  lessonId: any;
  listQuestion: any;
  NameSubject: any;
  Listsubject: any;

  constructor(private _listquestion: ListObjectService, private route: ActivatedRoute, private http: HttpClient, private _ListSubject: ListSubjectService) {
    this.route.paramMap.subscribe(param => {
      this.lessonId = param.get("tId");
      console.log(this.lessonId);
    });
  }
  ngOnInit() {
    this._listquestion.getObjectsFromService(this.lessonId).subscribe(data => {
      this.listQuestion = data;
    });
    this._ListSubject.subject.forEach(item =>{
      if(this.lessonId==item.Id){
        this.NameSubject=item.Name;
      }
    });
   
  }

}
