import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../api.service';
import { UrlService } from '../../../services/url.service';
import { BLOG } from '../../../constants/api-constants';
import { ImageService } from '../../../services/image.service';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { TradersImgComponent } from '../../shared/traders-img/traders-img.component';

@Component({
  selector: 'app-home-blog',
  standalone: true,
  imports: [CommonModule,TradersImgComponent,NgOptimizedImage],
  templateUrl: './home-blog.component.html',
  styleUrl: './home-blog.component.css',
  providers:[ApiService]
})
export class HomeBlogComponent implements OnInit{
  blogs: any[] = [];
  page: number;
  size: number;
  constructor(
    private api: ApiService,
    public urlService: UrlService,
    private imageService: ImageService
  ) {
    this.page = 0;
    this.size = 5;
  }

  ngOnInit(): void {
    this.getAllBlogs();
  }
  getAllBlogs() {
    this.api
      .get(BLOG.HOMEGUEST + '?page=' + this.page + '&size=' + this.size, true)
      .subscribe(
        (res: any) => {
          this.blogs = res.body;
          //console.log(this.blogs)
          this.blogs = this.blogs.filter((object: any) => {
            return object.image && object.image != null;
          });
          this.blogs.forEach((element: any) => {
            this.imageService.getImageContent(element.image);
          });
          this.blogs.sort(() => Math.random() - 0.5);
        },
        (error) => { }
      );
  }
}
