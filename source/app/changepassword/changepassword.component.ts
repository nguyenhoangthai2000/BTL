import { Component, OnInit } from '@angular/core';
import { ListUserService } from '../service/list-user.service';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {

  constructor(private router: Router,
    private _listUserStudent: ListUserService,
    private route: ActivatedRoute,
    private http: HttpClient) { }

  liststudent: any;
  ngOnInit() {
   
  }

}
