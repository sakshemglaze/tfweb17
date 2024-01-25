import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule, OwlOptions,  } from 'ngx-owl-carousel-o';
import { ApiSharedService } from '../../services/api-shared.service';


import { PostRequirementServiceService } from '../../services/post-requirement-service.service';
import { StorageService } from '../../services/storage.service';

import { HeaderComponent } from '../header/header.component';
import { HomeSearchComponent } from './home-search/home-search.component';
import { HomeIndustryComponent } from './home-industry/home-industry.component';
import { BannerServiceService } from '../../services/banner-service.service';

import { CommonModule, NgOptimizedImage } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OtpComponent } from '../dialog/otp/otp.component';
import { HomeBlogComponent } from './home-blog/home-blog.component';
import { TradersImgComponent } from '../shared/traders-img/traders-img.component';
import { PrimengModule } from '../../modules/primeng/primeng.module';
import { state, style, trigger } from '@angular/animations';
import { RouterLink } from '@angular/router';
import { NoopAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { ToastModule } from 'primeng/toast';




@Component({
  selector: 'app-home',
  standalone: true,
 
  imports: [HeaderComponent,HomeSearchComponent,ToastModule,NgOptimizedImage,OtpComponent,PrimengModule,HomeBlogComponent,HomeIndustryComponent,CarouselModule,CommonModule,FormsModule,ReactiveFormsModule,TradersImgComponent,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
 
  providers:[PostRequirementServiceService,],
 
})
export class HomeComponent implements OnInit,AfterViewInit{
  isApiAlreadyCalled: any;
  homeBanners: any;
  homeMidelBanner:any;
  customOptionsSm: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 1000,
    autoWidth: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    items: 1,
    nav: false,
  };
  customOptionsCities: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 1000,
    autoWidth: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    items: 10,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
  };
  customOptionsCities2: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 1000,
    autoWidth: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    items: 5,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 6,
      },
    },
  };

  customOptionsCities3: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 1000,
    autoWidth: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    items: 5,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      940: {
        items: 2,
      },
    },
  };

  customOptionsCities4: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 1000,
    autoWidth: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    items: 5,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
  };

  constructor( public requirementService: PostRequirementServiceService, 
    private _apiSharedService: ApiSharedService, 
    public Banners: BannerServiceService,
    public storageService:StorageService, 
    private modalS:NgbModal) { }
  ngOnInit(): void {
    //window.scrollTo(0, 0);
    
    //this.modalS.open(LoadpComponent, { size: 'lg', centered: true });
    this.requirementService.initializeRequirementForm();
    this._apiSharedService
      .getAllHeaderBanner()
      .subscribe((res) => {
        console.log(res);
        this.homeBanners = res;
      });
      //console.log(this.storageService.getItem('login'))
      this._apiSharedService.getBannerByKeyword("","Header Middle").subscribe(res=>{
        console.log(res)
        this.homeMidelBanner=res
      })
      console.log(this.requirementService.productSellerForm);
      
  }

  ngAfterViewInit(): void {
    //this.modalS.dismissAll();
          //Remove the CSS class to display the content on the client side
    const hiddenContent = document.querySelector('.hidden-content');
    if (hiddenContent) {
     hiddenContent.classList.remove('hidden-content');
   }
  }
  /*searchInViewportActionHome(event: any) {
    if (event.visible && this.isApiAlreadyCalled) {
      this.isApiAlreadyCalled = false;
      this.Banners.getAllBannerByPageName(
        "Header"
      );
    }
  }*/
}
