import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Inject, Input, OnInit, PLATFORM_ID, Renderer2 } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { ApiSharedService } from '../../../services/api-shared.service';
import { BannerServiceService } from '../../../services/banner-service.service';
import { CommonModule } from '@angular/common';
import { TradersImgComponent } from '../traders-img/traders-img.component';
import { PrimengModule } from '../../../modules/primeng/primeng.module';

@Component({
  selector: 'app-banner-adv',
  standalone: true,
  imports: [CommonModule,PrimengModule, TradersImgComponent,CarouselModule],
  templateUrl: './banner-adv.component.html',
  styleUrl: './banner-adv.component.css'
})
export class BannerAdvComponent implements OnInit, AfterViewInit {
  AllGuestBannersTemp: any[] = [];
  bannerTop:any;
  @Input() bannerPosition:any;
  @Input() renderServerSide:any= false;
  @Input() image: any;
  @Input() category:any;
  carouselLoaded:boolean = false;
  customOptionsSm: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 1400,
    autoWidth: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    items: 1,
    nav: false,
  };

  constructor(
    private _apiSharedService: ApiSharedService,
    public bannerService: BannerServiceService,
    private renderer: Renderer2, private el: ElementRef,private cdr: ChangeDetectorRef,
    @Inject(PLATFORM_ID) private platformId:any
  ) {}

  ngOnInit() {
    console.log(this.carouselLoaded);
  }

  ngAfterViewInit() {
    if (this.image && this.image != "na") {
      this.getImageContent({ image: this.image });
    } else {
      this.getAllBannerByPageName();
    }
    this.carouselLoaded = true;
    const hiddenContent = this.el.nativeElement.querySelector('.hidden-content');
    if (hiddenContent) {
      this.renderer.removeClass(hiddenContent, 'hidden-content');
      this.cdr.detectChanges();
    }

    console.log(this.carouselLoaded);
  }
      
  getAllBannerByPageName() {
    this._apiSharedService.getBannerByKeyword(this.category,this.bannerPosition).subscribe((banner) => {
        if (banner) {
          this.AllGuestBannersTemp = banner;
          console.log(this.AllGuestBannersTemp);
          this.bannerTop = this.AllGuestBannersTemp[0];
        }
      });
    /*  
    this._apiSharedService
      .getBannerByPageName(this.bannerPosition)
      .subscribe((res) => {
        if (this.renderServerSide) {
          this.getImageContent(res[this.bannerPosition]);
        } else {
          if (isPlatformBrowser(this.platformId)) {
            this.getImageContent(res[this.bannerPosition]);
          }
        }
      });
      console.log(this.bannerPosition);
       this._apiSharedService
      .getBannerByKeyword(this.bannerPosition)
      .subscribe((res) => {
        console.log('image api')
        console.log(res)
       console.log(res[0].image.id)
       if(res[0].image.imageContent === null){
        "https://doc.tradersfind.com/images/" +res[0].image.id + ".webp";
       } else {
        if (this.renderServerSide) {
          this.getImageContent(res[0]);
        } else {
          if (isPlatformBrowser(this.platformId)) {
            this.getImageContent(res[0]);
          }
        }}
        console.log(this.getImageContent(res[0]));
      });*/
  }

  getImageContent(item:any) {
    if (item && item.image) {
      this._apiSharedService.getImageContent(item.image.id).subscribe(
        (res) => {
          if (res.imageContent) {
            item["imageContent"] = res.imageContent;
            item["imageContent"] =
              res.imageContentContentType + "," + res.imageContent;
          } else {
            item["imageContent"] = null;
          }
          if (this.image && this.image != "na") {
            this.bannerTop = item;
            if (!this.bannerTop.link) this.bannerTop.link = this.image.link;
          } else if (item.webPageName == this.bannerPosition) {
            this.bannerTop = item;
          }
        },
        (error) => {}
      );
    }
  }

}
