import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  settings:any = [];

  constructor(private http: HttpClient) {
  }

  getSubjects(id:any) {
    return this.http.get<any>(environment.apiUrl + '/api/front/subjectsbycareer/'+id);
  }

}
