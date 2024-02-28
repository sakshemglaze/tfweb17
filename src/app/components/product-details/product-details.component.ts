import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeviceDetectorService } from 'ngx-device-detector';
import { OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';
import { ApiSharedService } from '../../services/api-shared.service';
import { AuthService } from '../../services/auth.service';
import { CommonService } from '../../services/common.service';
import { ImageService } from '../../services/image.service';
import { PostRequirementServiceService } from '../../services/post-requirement-service.service';
import { UrlService } from '../../services/url.service';
import { PostRequirementComponent } from '../dialog/post-requirement/post-requirement.component';
import { ProductService } from '../../services/product.service';
import { FooterComponent } from '../footer/footer.component';
import { MaskingService } from '../../services/masking.service';
import { BannerServiceService } from '../../services/banner-service.service';
import { HeaderSubComponent } from '../header-sub/header-sub.component';
import { LoadpComponent } from '../shared/loadp/loadp.component';
import { TradersImgComponent } from '../shared/traders-img/traders-img.component';
import { RatingsComponent } from '../shared/ratings/ratings.component';
import { OtpComponent } from '../dialog/otp/otp.component';
import { BannerAdvComponent } from '../shared/banner-adv/banner-adv.component';
import { MoreProductsComponent } from './more-products/more-products.component';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, FooterComponent,
    ReactiveFormsModule,MoreProductsComponent, HeaderSubComponent,LoadpComponent, TradersImgComponent, RatingsComponent,OtpComponent, BannerAdvComponent,],
  
  providers:[PostRequirementServiceService,MessageService],
    templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
 

  myForm: FormGroup;



  title = "Buy Products At TradersFind";
  public prodDetails: any;      
  prodSpecs: any;
  prodId: any;
  prodIdqwew:any
  productCaraoselOptions: OwlOptions | undefined;
  ProductLinkCount = 4;
  sellerDetails: any;
  businessDays: any;
  businessHours: any;
  activeClassTab = "selpro";
  slidesStore: any[] = [];
  activeSlides: SlidesOutputData | undefined;
  cardata: any[] = [];
  rproducts: any[] = [];
  divStyle = '';
  indexPosition: any;
 image:any;
 
  customOptions: OwlOptions = {
    loop: true,
    dots: true,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
    },
  };

  units: any;
  img: any
  no_img: any
  prodUrl:any

  constructor(
    // public owlcarouselService: OwlcarouselService,
    private route: ActivatedRoute,
    private deviceService: DeviceDetectorService,
    public bannerService: BannerServiceService,
    private _apiSharedService: ApiSharedService,
    public maskingService: MaskingService,
    public urlService: UrlService,
    public productService: ProductService,
    private sanitizer: DomSanitizer,
    private apiService: CommonService,
    public authservice: AuthService,
    private _router:Router,
    public modalS: NgbModal,
    public requirementService: PostRequirementServiceService,
    private imageService: ImageService,
    //public notificationHeader: NotificationHeaderService,
    @Inject(PLATFORM_ID) private platformId: any) { 

    this.myForm = new FormGroup({
      description: new FormControl('', [Validators.required]),
      enquirerEmail: new FormControl('', [Validators.required, Validators.email]),
      mobileNo:new FormControl('',[Validators.required]),
      checkbox:new FormControl(false,[Validators.required]),
      noCode:new FormControl('+971',Validators.required),
    });

  }
   
  ngOnInit(): void {
    this.requirementService.initializeRequirementForm();
     
    if (this.deviceService.isMobile()) {
      this.ProductLinkCount = 1;
    } else if (this.deviceService.isTablet()) {
      this.ProductLinkCount = 2;
    } else {
      this.ProductLinkCount = 4;
    }
    this.productCaraoselOptions = {
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
      items: this.ProductLinkCount,
      navText: ['<img src="/assets/v2/fa-icons/angle-left-solid.svg" alt="angle-left-icons" class="width-search-fa">', '<img src="/assets/v2/fa-icons/angle-right-solid.svg" alt="angle-right-icons" class="width-search-fa">'],
      nav: true,
    };

     this.authservice.loggedInUserDetails
     ? this.authservice.loggedInUserDetails.id
     : null
     //console.log( this.authservice.loggedInUserDetails);
    this.prodId = this.route.snapshot.paramMap.get("prodId");
    this.prodIdqwew=this.route.snapshot.paramMap.get("prodName");
    console.log("URL "+this.prodIdqwew);
    
    this._apiSharedService
      .getProductDetails(
        this.prodId, null,this.prodIdqwew

      )
      .subscribe(
        (res) => {
          this.prodDetails = res;
          console.log(res);
          if (
            this.prodDetails &&
            this.prodDetails.seller &&
            this.prodDetails.seller.sellerBusinessHours
          ) {
            //console.log("----------------")
            //console.log(this.prodDetails);
            let businessHours =
              this.prodDetails.seller.sellerBusinessHours.split("@@@");
            if (
              businessHours &&
              businessHours[0] &&
              businessHours[0] != "" &&
              businessHours[0].split("-") &&
              businessHours[0].split("-").length == 2 &&
              businessHours[0].split("-")[0].trim() != "" &&
              businessHours[0].split("-")[1].trim() != ""
            ) {
              this.businessDays = businessHours[0];
            }
            if (
              businessHours &&
              businessHours[1] &&
              businessHours[2] &&
              businessHours[1] != "" &&
              businessHours[2] != ""
            ) {
              this.businessHours =
                " from " + businessHours[1] + " to " + businessHours[2];
            }
          } else {
            this._router.navigate(['/']);
          }
          this.prodSpecs = JSON.parse(res.specifications);
          if (isPlatformBrowser(this.platformId)) {
            if (res.images && res.images.length > 0) {
              res.images.forEach((element: any) => {
                this.imageService.getImageContent(element)
              })
            }
          }
          this.productService.setSeoAttributes(this.prodDetails);
        },
        (error) => {
          this._router.navigate(['not-found']);
        }
      );


    this.apiService
      .getRelatedProduct(this.prodId)
      .subscribe(
        (related) => {
          this.rproducts = related.products;
          this.rproducts.forEach((element) => {
            if (element.images.length > 0) {
              this.apiService.getImageContent(element.images[0].id).subscribe(
                (res) => {
                  if (res.imageContent) {
                    element["imageContent"] = res.imageContent;
                    element["imageContent"] =
                      "data:image/png;base64," + res.imageContent;
                  } else {
                    element["imageContent"] = null;
                  }
                },
                (error) => {

                }
              );
            } else {
              element["imageContent"] = null;
            }
          });
        },
        (error) => {

        }
      );

      
  }

  TabActive(value: string) {
    this.activeClassTab = value;
  }

  getPassedData(data: SlidesOutputData, owldata: any) {
    this.activeSlides = data;
    this.indexPosition = this.activeSlides.startPosition;
    this.cardata = owldata[this.activeSlides.startPosition ? this.activeSlides.startPosition : 0].imageContent;
    this.ChangeImg(this.cardata);
  }

  ChangeImg(path: any) {
    var image = <HTMLImageElement>document.getElementById("prodImg");
    image.src = path;
  }

  mapUrl() {
    // return this.sanitizer.bypassSecurityTrustResourceUrl(
    //   "https://maps.google.com/maps?q=" +
    //   this.prodDetails.seller.coordinates[1] +
    //   ", " +
    //   this.prodDetails.seller.coordinates[0] +
    //   "&z=15&output=embed"
    // );
  }
  openPostRequirement(productNm:String) {
    const modalRef = this.modalS.open(PostRequirementComponent, { size: 'lg', centered: true })
    modalRef.componentInstance.product = productNm;
  }

  onSubmit(){
    console.log(this.myForm.value);
  }
}
