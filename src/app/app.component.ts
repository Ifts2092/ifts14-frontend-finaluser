import { Component } from '@angular/core';
import { BlogService } from './services/blog.service';
import { SettingService } from './services/setting.service';
import { CareerService } from './services/career.service';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ifts14-finaluser-frontend';

  settings: any = [];

  sections: any;
  careers:any;
  
  constructor(
    private blogService:BlogService,
    private settingService:SettingService,
    private careerService:CareerService,
    
    ){
      this.getSettings();
      this.getSections();
      this.getCareers();
    }


    async getSections(){
      this.blogService.getSections().subscribe(data => {
        this.sections = data;
      });
    }

    async getSettings(){
      // this.settingService.getSettings().subscribe(data => {
      //   if(data && data.length> 0){
      //     for(let s of data)
      //     localStorage.setItem(s.key,s.value);
      //   }
      // });
      let a = await this.settingService.getSetting('email');
    }

    async getCareers(){
      this.careers = await lastValueFrom(this.careerService.getCareers());
    }


    
}
