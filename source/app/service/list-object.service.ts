import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListObjectService {

  constructor(private http: HttpClient) { }

  getObjectsFromService(idName:string):Observable<any>{
    return this.http.get<any>(`../assets/db/Quizs/`+idName+`.json`);
  }
}
