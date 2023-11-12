import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {

  public list:any  = [];
  public categories:any  = [];

  env:any;
  no_image:any = "/assets/no-image.png";

  section: any;
  category: any;

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
      this.section = params?.section;
      this.category = params?.category;
      
      this.getCategories();
      this.getList();
    });

    //const section = this.route.snapshot.paramMap.get('section');
    //const category = this.route.snapshot.paramMap.get('category');


    
  }

  async getList(){
    this.blogService.getPosts(this.section, this.category).subscribe(data => {
       this.list = data;
    });    
  }

  async getCategories(){
    this.blogService.getCategories().subscribe(data => {
       this.categories = data;
    });    
  }

  removeHTML(html:any){
    return html.replace(/<[^>]*>/g, '');
  }

}
