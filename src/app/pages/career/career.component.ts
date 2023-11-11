import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { CareerService } from 'src/app/services/career.service';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss']
})
export class CareerComponent {


  career: any;
  careers: any = [];
  subjects: any = [];

  constructor(
      private router : Router, 
      private route: ActivatedRoute,
      private careerService:CareerService,
      private subjectService:SubjectService
    ){
    
    }

    ngOnInit() {

      this.route.params.subscribe((params: any) => {
        this.getCareers(params?.career);
      });
   
    } 

    async getCareers(name:any){
      this.careers = await lastValueFrom(this.careerService.getCareers());
      this.career =  this.careers.find((c:any) => {return c.name.toLowerCase() == name});
      this.subjects = await lastValueFrom(this.subjectService.getSubjects(this.career.id));
      console.log(this.subjects);
    }



}
