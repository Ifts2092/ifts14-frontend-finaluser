import { Component } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {

  public list:any  = [];

  constructor(private postService:PostService){
  
  }

  ngOnInit() {
    this.getList();
  }

  async getList(){
    this.postService.getList().subscribe(data => {
       this.list = data;
    });    
  }

}
