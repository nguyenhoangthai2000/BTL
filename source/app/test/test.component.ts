import { Component, OnInit } from '@angular/core';

import {ListSubjectService} from '../service/list-subject.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  idStudent: any;
  employee: any;
  constructor(private _listsubject:ListSubjectService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(param => {
      this.idStudent = param.get("sId");
    });
    this.employee = this._listsubject.subject;

  }
  search() {
    if (this.employee.Name != "") {

    } else if (this.employee.Name == "") {
      this.employee = this.employee.filter(res => {
        return res.employee.Name.toLocaleLowerCase().match(this.employee.Name.toLocaleLowerCase());
      })
    } 
  }
}
