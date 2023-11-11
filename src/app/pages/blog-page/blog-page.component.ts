import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss']
})
export class BlogPageComponent {

  public data:any  = [];

  env:any;

  id: any;

  previewImg:any;

  
  constructor(
    private blogService:BlogService,
    private router : Router, 
    private route: ActivatedRoute
    ){
    	
      this.env =  environment.apiUrl + '/api' ;


  }

  ngOnInit() {

    this.route.params.subscribe((params: any) => {
      console.log(params);
      this.id = params?.id;
      
      this.getPostById(this.id);
    });

    //const section = this.route.snapshot.paramMap.get('section');
    //const category = this.route.snapshot.paramMap.get('category');


    
  }
  async getPostById(id:any){
    this.blogService.getPostById(this.id).subscribe(data => {
      this.data = data;

      if(this.data.imageUrl){
        this.previewImg = environment.apiUrl + '/api'+ this.data.imageUrl;
      }

   });    
  }

}
