import { Component, OnInit } from '@angular/core';
import { ListSubjectService } from '../service/list-subject.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  AName: string;
  employee: any;
  constructor(private _listSubject: ListSubjectService) { }

  ngOnInit() {
    this.employee = this._listSubject.subject;
  }
  search() {
    if (this.AName != "") {

    } else if (this.AName == "") {
      this.ngOnInit();
    }
    this.employee = this.employee.filter(res => {
      return res.Name.toLocaleLowerCase().match(this.AName.toLocaleLowerCase());
    })
  }

}
