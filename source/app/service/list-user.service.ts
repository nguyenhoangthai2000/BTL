import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListUserService {

  constructor(private http:HttpClient) { };
  studentURL="https://cuong-dev1-api.herokuapp.com/studentsTwo";

  getstudent(){
    return this.http.get(this.studentURL);
  }

}
