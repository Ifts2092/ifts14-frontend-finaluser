import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SettingService {

  settings:any = [];

  constructor(private http: HttpClient) {
  }

  getSettings() {
    return this.http.get<any>(environment.apiUrl + '/api/front/settings')
  }

  async getSetting(key:any){
    if(this.settings.length ==0){ 
      this.settings = await lastValueFrom(this.getSettings());
    }
    return this.settings.find((s:any) => { return s.key == key})?.value;
  }
}
