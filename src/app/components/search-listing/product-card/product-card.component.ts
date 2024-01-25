import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeviceDetectorService } from 'ngx-device-detector';
import { MaskingService } from '../../../services/masking.service';
import { UrlService } from '../../../services/url.service';
import { PostRequirementComponent } from '../../dialog/post-requirement/post-requirement.component';
import { TradersImgComponent } from '../../shared/traders-img/traders-img.component';
import { RatingsComponent } from '../../shared/ratings/ratings.component';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MessageService } from 'primeng/api';
import { PostRequirementServiceService } from '../../../services/post-requirement-service.service';
//import { ProductCardModule } from './product-card.module';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [ CommonModule,TradersImgComponent,
    RatingsComponent,
    CarouselModule,],
    providers:[MessageService,PostRequirementServiceService],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  carouselOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 1000,
    autoWidth: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    items: 1,
    nav: false,
  };

  @Input() isPackageProduct: any = false;
  @Input() isTitaniumPackageProduct: any = false;
  @Input() feature: any;
  @Input() products: any;
  isActivePackage: any = false;
  imageContent: any;
  DWidth = 30;
  SAWidth = 40;
  //modalRef: BsModalRef | undefined;
  constructor(public urlService: UrlService,
    public maskingService: MaskingService,
    public deviceService: DeviceDetectorService,
    public modalS: NgbModal
  ) { }

  specList(jsonString: any) {
    return JSON.parse(jsonString);
  }
  ngOnInit(): void {
//    console.log(this.products)
    if (this.feature == 1) {
      if (this.deviceService.isMobile()) {
        this.DWidth = 20;
      } else if (this.deviceService.isTablet()) {
        this.DWidth = 7;
      } else {
        this.DWidth = 40;
      }
    } else {
      if (this.deviceService.isMobile()) {
        this.DWidth = 26;
      } else if (this.deviceService.isTablet()) {
        this.DWidth = 15;
      } else {
        this.DWidth = 40;
      }
    }
    if (this.deviceService.isMobile()) {
      this.SAWidth = 35;
    } else if (this.deviceService.isTablet()) {
      this.SAWidth = 30;
    } else {
      this.SAWidth = 36;
    }


    if (this.products && this.products.activePackage && this.products.activePackage.packageName && (this.products.activePackage.packageName == null || this.products.activePackage.packageName.toLowerCase().indexOf('free') >= 0)) return;

    if (this.products && this.products.activePackage && this.products.activePackage.packageName && this.products.activePackage.subscriptionDate != null && this.products.activePackage.subscriptionEndDate != null && new Date() > new Date(this.products.activePackage.subscriptionDate) && new Date() < new Date(this.products.activePackage.subscriptionEndDate)) {
      this.isActivePackage = true;
    }

    if (this.products && this.products.activePackage && this.products.activePackage && this.products.activePackage.packageName.toLowerCase().indexOf('titanium') >= 0 && this.products.activePackage.subscriptionDate != null && this.products.activePackage.subscriptionEndDate != null && new Date() >= new Date(this.products.activePackage.subscriptionDate) && new Date() <= new Date(this.products.activePackage.subscriptionEndDate)) {
      this.isTitaniumPackageProduct = true;
      return;
    }
    if (this.products && this.products.activePackage && this.products.activePackage && this.products.activePackage.subscriptionDate != null && this.products.activePackage.subscriptionEndDate != null && new Date() > new Date(this.products.activePackage.subscriptionDate) && new Date() < new Date(this.products.activePackage.subscriptionEndDate)) {
      this.isPackageProduct = true;
    }



  }

  openPostRequirement(productNm:String) {
    const modalRef = this.modalS.open(PostRequirementComponent, { size: 'lg', centered: true })
    modalRef.componentInstance.product = productNm;
  }
}
