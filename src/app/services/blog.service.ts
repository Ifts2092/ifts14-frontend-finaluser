import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) {
  }

  getPosts(section:any, category:any) {
    if(category && section){
      return this.http.get<any>(environment.apiUrl + '/api/front/posts/' + section +'/' + category);
    }else {
      return this.http.get<any>(environment.apiUrl + '/api/front/posts/' + section);
    }
  }

  getSections() {
    return this.http.get<any>(environment.apiUrl + '/api/front/sections')
  }

  getCategories() {
    return this.http.get<any>(environment.apiUrl + '/api/front/categories')
  }

  getPostById(id:any) {
    return this.http.get<any>(environment.apiUrl + '/api/front/postbyid/'+ id)
  }






  // getById(id: Number){
  //   return this.http.get<any>(environment.apiUrl + '/api/front/posts/'+ id)
  // }

  // save(item:any){
  //   return this.http.post<any>(environment.apiUrl + '/api/front/posts', item )
  // }
  // delete(id: Number){
  //   return this.http.delete<any>(environment.apiUrl + '/api/front/posts/'+ id)
  // }
      
}
