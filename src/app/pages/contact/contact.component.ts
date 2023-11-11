import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SettingService } from 'src/app/services/setting.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  email: any;
  direccion: any;
  telefono: any;
  horario:any;

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
      this.email = await this.settingService.getSetting('Email');
      this.direccion = await this.settingService.getSetting('Direccion');
      this.telefono = await this.settingService.getSetting('Telefono');
      this.horario = await this.settingService.getSetting('Horario');
      

    }
}
