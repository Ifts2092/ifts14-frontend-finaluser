import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SettingService } from 'src/app/services/setting.service';

@Component({
  selector: 'app-requirement',
  templateUrl: './requirement.component.html',
  styleUrls: ['./requirement.component.scss']
})
export class RequirementComponent {

  content:any;

  constructor(
    private settingService:SettingService,
    private router : Router, 
    private route: ActivatedRoute
    ){
      this.getRequirement();
    }

    async getRequirement(){
      // this.settingService.getSettings().subscribe(data => {
      //   if(data && data.length> 0){
      //     for(let s of data)
      //     localStorage.setItem(s.key,s.value);
      //   }
      // });
      this.content = await this.settingService.getSetting('Requisitos');
      console.log(this.content);

    }
}
