import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeviceDetectorService } from 'ngx-device-detector';
import { ApiSharedService } from '../../../services/api-shared.service';
import { MaskingService } from '../../../services/masking.service';
import { UrlService } from '../../../services/url.service';
import { PostRequirementComponent } from '../../dialog/post-requirement/post-requirement.component';
import { TradersImgComponent } from '../../shared/traders-img/traders-img.component';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RatingsComponent } from '../../shared/ratings/ratings.component';


@Component({
  selector: 'app-premium-product-card',
  standalone: true,
  imports: [CommonModule,
    RatingsComponent, 
    TradersImgComponent,
    CarouselModule],
  templateUrl: './premium-product-card.component.html',
  styleUrl: './premium-product-card.component.css'
})
export class PremiumProductCardComponent {
  @Input() product: any
  imageContent: any;
  sellerProduct:any;
  tproduct:any;
  DWidth = 30;
  SAWidth = 40;

  carouselPremium = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 1000,
    autoWidth: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
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
    nav: false,
  };

  constructor(
    public urlService: UrlService, 
    public maskingService: MaskingService,
    public _apiSharedService:ApiSharedService,
    public deviceService: DeviceDetectorService,
    public modalS: NgbModal
    ) { }
  ngOnInit(): void{
    this._apiSharedService
      .getRelatedProductsByProductId(this.product.id,{ page: 0, size: 12 })
      .subscribe((res: {body: { products:any; }; } ) => {
        this.sellerProduct = res.body.products; 
        //this.sellerProduct = this.sellerProduct.length > 3 ? this.sellerProduct.slice(0,3) : this.sellerProduct;
      }, (error:any) => {}
      );
      this.tproduct=this.sellerProduct;
  }
  specList(jsonString: any) {
    return JSON.parse(jsonString);
  }
  openPostRequirement() {
    this.modalS.open(PostRequirementComponent, { size: 'lg', centered: true })
  }
}
