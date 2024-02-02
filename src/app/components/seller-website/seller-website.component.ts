import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeviceDetectorService } from 'ngx-device-detector';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ApiSharedService } from '../../services/api-shared.service';
import { MaskingService } from '../../services/masking.service';
import { OwlcarouselService } from '../../services/owlcarousel.service';
import { PostRequirementServiceService } from '../../services/post-requirement-service.service';
import { SeoService } from '../../services/seo.service';
import { UrlService } from '../../services/url.service';
import { PostRequirementComponent } from '../dialog/post-requirement/post-requirement.component';
import { MapComponent } from '../shared/map/map.component';
import { SellerUtilsService } from '../../services/seller-utils.service';
import { LoadpComponent } from '../shared/loadp/loadp.component';
import { OtpComponent } from '../dialog/otp/otp.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderSubComponent } from '../header-sub/header-sub.component';
import { TradersImgComponent } from '../shared/traders-img/traders-img.component';
import { RatingsComponent } from '../shared/ratings/ratings.component';
import { LogoComponent } from '../shared/logo/logo.component';
import { MessageService } from 'primeng/api';
import { FooterSmallComponent } from '../footer/footer-small/footer-small.component';
@Component({
  selector: 'app-seller-website',
  standalone: true,
  imports: [FooterSmallComponent,CommonModule,LoadpComponent,ReactiveFormsModule,OtpComponent, HeaderSubComponent, TradersImgComponent, RatingsComponent,LogoComponent,MapComponent],
  providers:[PostRequirementServiceService,MessageService],
  templateUrl: './seller-website.component.html',
  styleUrl: './seller-website.component.css'
})
export class SellerWebsiteComponent implements OnInit {
  
    dataFilter:any
    sellerCompanyName: any;
    id:any;
    seller: any;
    featuredProducts: any;
    nonFeaturedProducts: any;
    featuredCount = 3;
    featureCaraoselOptions: OwlOptions | undefined;
    sellerPackageType: any;
    logo:any;
    constructor(
      public owlcarouselService: OwlcarouselService,
      private _apiSharedService: ApiSharedService,
      private route: ActivatedRoute,
      private messageService: MessageService,
      public maskingService: MaskingService,
      public urlService: UrlService,
      private deviceService: DeviceDetectorService,
      //private notificationService: NotificationV2Service,
      public sellerUtils: SellerUtilsService,
      //public dialog: MatDialog,
      private seoService: SeoService,
      //public notificationHeader: NotificationHeaderService,
      private sanitizer: DomSanitizer,
      private modalS:NgbModal,
      public requirementService:PostRequirementServiceService,
      private router:Router,
      @Inject(PLATFORM_ID) private platformId: any
    ) { }
  
    ngOnInit() {
      this.requirementService.initializeRequirementForm();
      
      if (this.deviceService.isMobile()) {
        this.featuredCount = 1;
      } else if (this.deviceService.isTablet()) {
        this.featuredCount = 2;
      } else {
        this.featuredCount = 3;
      }
  
      this.featureCaraoselOptions = {
        loop: true,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        dots: false,
        navSpeed: 1000,
        autoWidth: true,
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        items: this.featuredCount,
        navText: [
          '<img src="/assets/v2/fa-icons/angle-left-solid.svg" alt="angle-left-icons" class="width-search-fa">',
          '<img src="/assets/v2/fa-icons/angle-right-solid.svg" alt="angle-right-icons" class="width-search-fa">',
        ],
        nav: true,
      };
  
   if( this.route.snapshot.paramMap.get("sellerUrl") != null && this.route.snapshot.paramMap.get("sellerUrl") !=""){
    this.sellerCompanyName =this.route.snapshot.paramMap.get("sellerUrl");
    this.id =  this.route.snapshot.paramMap.get("id");
   }else{
    this.sellerCompanyName =
    this.route.snapshot.paramMap.get("sellerCompanyName");
    this.id =  this.route.snapshot.paramMap.get("id"); 
   }
  
      if (this.sellerCompanyName) {
        this.sellerCompanyName = this.sellerCompanyName.split("-").join(" ");
      } else {
        // this.messageService.add({
        //   severity: "error",
        //   summary: "No seller found. Please check the url again.",
        // });
        //return;
        this.router.navigateByUrl('not-found');
      }
      //console.log( this.route.snapshot.paramMap.get("sellerCompanyName"));
      //console.log(this.route.snapshot.paramMap.get("sellerUrl"));
      //console.log("-------"+this.sellerCompanyName)
      this._apiSharedService
        .getSellerByCompanyName(this.sellerCompanyName)
        .subscribe((res: string | any[]) => {
          //console.log(res);
          this.seller = res && res.length > 0 ? res[0] : null;
          //console.log(this.mapUrl);
          if (!this.seller) this.router.navigateByUrl('not-found');
          this.sellerPackageType = this.sellerUtils.getSellerType(this.seller);
          this.seoService.setSellerSeo(this.seller);
          if (isPlatformBrowser(this.platformId)) {
            this.getFeaturedProducts(this.seller.id);
            this.getApprovedProducts(this.seller.id);
          }
        },
        (error) => {
          this.router.navigate(['not-found']);
        });
    }
  
    mapUrl() {
  
      if (this.seller.coordinates[1] || this.seller.coordinates[0]) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(
          "https://maps.google.com/maps?q=" +
          this.seller.coordinates[0] +
          ", " +
          this.seller.coordinates[1] +
          "&z=15&output=embed"
        );
      }
      else {
        return this.sanitizer.bypassSecurityTrustResourceUrl(
          "https://maps.google.com/maps?q=" +
          "23.4241" +
          ", " +
          "53.8478" +
          "&z=15&output=embed"
        );
      }
    }
    getFeaturedProducts(sellerId: any) {
      this._apiSharedService
        .getApprovedProductsBySeller(sellerId, { isFeatured: true })
        .subscribe((res: { products: any; }) => {
          this.featuredProducts = res.products;
        });
    }
  
    getApprovedProducts(sellerId: any) {
      this._apiSharedService
        .getApprovedProductsBySeller(sellerId, { isFeatured: false })
        .subscribe((res: { products: any; }) => {
          this.nonFeaturedProducts = res.products;
        });
    }
  
    // onClickOtherBranches() {
    //   this.notificationService.openDialog(
    //     this.getBranchAddressHtml(this.seller),
    //     NOTIFICATION_DATA_TYPE.HTML
    //   );
    // }
  
    getBranchAddressHtml(seller: any) {
      let html = "";
      html += "<div class='container'><div class='row'>";
      if (
        seller &&
        seller.sellerCompanyBranchAddresses &&
        seller.sellerCompanyBranchAddresses.length > 0 &&
        seller.sellerCompanyBranchAddresses[0] != null &&
        seller.sellerCompanyBranchAddresses[0] != ""
      ) {
        html +=
          "<div class='col-12'>Branch Address 1 - " +
          seller.sellerCompanyBranchAddresses[0] +
          "</div>";
      }
      if (
        seller &&
        seller.sellerCompanyBranchAddresses &&
        seller.sellerCompanyBranchAddresses.length > 1 &&
        seller.sellerCompanyBranchAddresses[1] != null &&
        seller.sellerCompanyBranchAddresses[1] != ""
      ) {
        html +=
          "<div class='col-12'>Branch Address 2 - " +
          seller.sellerCompanyBranchAddresses[1] +
          "</div>";
      }
  
      html += "</div></div>";
      return html;
    }
    openMap(latitude:Number,longitude:Number) {
      const modalRef = this.modalS.open(MapComponent, { size: 'lg', centered: true })
      modalRef.componentInstance.latitude = latitude;
      modalRef.componentInstance.longitude = longitude;
    }
    // businessDialog() {
    //   const dialogRef = this.dialog.open(ClaimBusinessV2Component, {
    //     width: "40%",
    //     height: "auto",
    //   });
  
    //   dialogRef.afterClosed().subscribe((result: any) => {});
    // }
  
    openPostRequirement() {
      this.modalS.open(PostRequirementComponent, { size: 'lg', centered: true })
    }
}
