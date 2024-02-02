import { Component, OnInit } from '@angular/core';
import { ApiSharedService } from '../../../services/api-shared.service';
import { ActivatedRoute } from '@angular/router';
import { ImageService } from '../../../services/image.service';
import { UrlService } from '../../../services/url.service';
import { SeoService } from '../../../services/seo.service';
import { CommonModule } from '@angular/common';
import { HeaderSubComponent } from '../../header-sub/header-sub.component';
import { TradersImgComponent } from '../../shared/traders-img/traders-img.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FooterComponent } from '../../footer/footer.component';
@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [FooterComponent,CommonModule,HeaderSubComponent,TradersImgComponent,NgxPaginationModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent implements OnInit {
  blog: any;
  title: any;
  latestBlogs: any[] = [];
  size = 5;
  constructor(
    private apiService: ApiSharedService,
    private activatedRoute: ActivatedRoute,
    private seoService: SeoService,
    private imageService: ImageService,
    public urlService: UrlService,


  ) { }

  ngOnInit(): void {
    this.title = this.activatedRoute.snapshot.paramMap.get('title');
    this.title = this.title.split('-').join(' ');
    this.apiService.getBlogByTitle({ blogTitle: this.title }).subscribe((res: any) => {
      this.blog = res;
      if (this.blog.image) {
        this.imageService.getImageContent(this.blog.image);
      }
      this.getLatestBlogs();
      // this.injectArticleScript();
       this.seoService.createAndSetSeoAttributes(res);
    },
      error => {

        //PAGENOTFOUND
      });
  }

  getLatestBlogs() {

    this.apiService.getLatestBlog({ size: this.size, sort: "createdDate,desc" }).subscribe(res => {
      this.latestBlogs = res;
      this.latestBlogs = this.latestBlogs.filter((blog: any) => blog.id != this.blog.id)
      this.latestBlogs.forEach((element: any) => {
        if (element.image) {
          this.apiService.getImageContent(element.image.id).subscribe(img => {
            if (img.imageContent) {
              element.image['imageContent'] = img.imageContentContentType + ',' + img.imageContent;
            } else {
              element['imageContent'] = null;
            }
          },
            error => {

            });
        }
      });
    },
      error => {
      });


  }
}
