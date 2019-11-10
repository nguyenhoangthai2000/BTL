import { Component, OnInit } from '@angular/core';
import { ListUserService } from '../service/list-user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  checkUser:boolean = false;
  constructor(private _ListUser: ListUserService, private route: ActivatedRoute) { }
  listuser:any;
  ngOnInit() {
    
    this._ListUser.getstudent().subscribe(data =>{
      this.listuser = data;
    })
  }

}
