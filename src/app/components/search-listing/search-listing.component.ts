import { CommonModule, KeyValuePipe, isPlatformBrowser, isPlatformServer } from '@angular/common';
import { AfterViewInit, Component, ElementRef, HostListener, Inject, OnInit, PLATFORM_ID, TransferState, ViewChild, makeStateKey } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeviceDetectorService } from 'ngx-device-detector';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { MessageService } from 'primeng/api';
import { Seo } from '../../models/seo';
import { ApiSharedService } from '../../services/api-shared.service';
import { AuthService } from '../../services/auth.service';
import { HomeSearchService } from '../../services/home-search.service';
import { SeoService } from '../../services/seo.service';
import { StorageService } from '../../services/storage.service';
import { UrlService } from '../../services/url.service';
import { BannerServiceService } from '../../services/banner-service.service';
import { StringManipulationService } from '../../services/string-manipulation.service';
import { OtpComponent } from '../dialog/otp/otp.component';
import { HeaderSubComponent } from '../header-sub/header-sub.component';
import { TradersImgComponent } from '../shared/traders-img/traders-img.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { PremiumProductCardComponent } from './premium-product-card/premium-product-card.component';
import { BannerAdvComponent } from '../shared/banner-adv/banner-adv.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostRequestComponent } from '../shared/post-request/post-request.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { state, style } from '@angular/animations';
import { PostRequirementServiceService } from '../../services/post-requirement-service.service';
import { ProductCardModule } from './product-card/product-card.module';
import { FooterComponent } from '../footer/footer.component';
//import { provideClientHydration } from '@angular/platform-browser';

@Component({
  selector: 'app-search-listing',
  standalone: true,
  imports: [FooterComponent,CommonModule,ReactiveFormsModule,OtpComponent,FormsModule, HeaderSubComponent, TradersImgComponent, 
     NgxPaginationModule,
      ProductCardComponent, PremiumProductCardComponent, CarouselModule, 
     // InfiniteScrollModule,
       BannerAdvComponent,PostRequestComponent
     ,KeyValuePipe], 
     providers:[PostRequirementServiceService,MessageService],
     
  templateUrl: './search-listing.component.html',
  styleUrl: './search-listing.component.css'
})
export class SearchListingComponent implements OnInit, AfterViewInit {
  canonicalUrl: string = "http://www.tradersfind.com/";

  a:any=0;
  b:any=0;
  c:any=0;
  d:any=0;
  e:any=0;
  f:any=0;
  g:any=0;

  loltu=0;

 _boxcheck:any=false
 anothervar:any
 uppersrcHedder:any
 selectedFilters: any;
 searchText: any;
 location: any;
 searchTextType: any;
 page: any = 1;
 products: any;
 productsgroup: any[] = [];
 
 productsgroup1: any;
 packageProducts: any;
 sponsoredProduct: any;
 filters: any;
 size = 12;
 totalLength = 0;
 filterDto: any;
 filterState: any;
 AllGuestBannersTemp: any[] = [];
 mynewsearckText:any
 storeSubcat:string[] =[];

 keyword: any="hello";
 subcategoryDetails: any;
 keywordDetails: any;
 blindKeywordDetails: any;
 keywordDescription: any;
 // showForm: boolean;
 subcategoryId: any;
 image: any;
 filterCategory: any[] = [];
 filterbrand: any[] = [];
 categoryDetails: any;
 industryDetails: any;
 showMore1: boolean = true;
 throttle = 0;
 distance = 2;
 showMore: boolean = true;
 shortDesc: any = 400;
 ctr: any = 12;
 itr: number=0;
 kv: number = 0;
 data: any;
 // customOptionsSm: OwlOptions = {
 //   loop: true,
 //   mouseDrag: true,
 //   touchDrag: true,
 //   pullDrag: true,
 //   dots: false,
 //   navSpeed: 1000,
 //   autoWidth: true,
 //   autoplay: true,
 //   autoplayTimeout: 5000,
 //   autoplayHoverPause: true,
 //   items: 1,
 //   nav: false,
 // };

 //@ViewChild("childFilter") childFilter: any;
 @ViewChild('loadingRef') loadingRef!: ElementRef;
 @ViewChild('loadnextRef') loadnextRef!: ElementRef;

 constructor(
   private route: ActivatedRoute,
   private _apiSharedService: ApiSharedService,
   private _router: Router,
  // public bannerService: BannerService,
   private stringManipulation: StringManipulationService,
   private seoService: SeoService,
   private transferState: TransferState,
   private homeSearchService: HomeSearchService,
  // public authservice: AuthService,
   public urlService: UrlService,
   @Inject(PLATFORM_ID) private platformId: any,
   private storageService: StorageService,
   private _urlservice: UrlService,
   //public deviceService: DeviceDetectorService,
   private modalS:NgbModal,
   //private messageService: MessageService
   // private _infiniteScrollModule:InfiniteScrollModule
 ) { }

 async ngOnInit(): Promise<void> {
   //const load = this.modalS.open(LoadpComponent, {centered: true })
   //load.componentInstance.frm = "search";
   
   // if (this.deviceService.isMobile()) {
   //   this.shortDesc = 100;
   // } else if (this.deviceService.isTablet()) {
   //   this.shortDesc = 300;
   // } else {
   //   this.shortDesc = 500;
   // }
  
   this._router.routeReuseStrategy.shouldReuseRoute = function () {
     return false;
   };
   this.selectedFilters = this.storageService.getItem(
     StorageService.SELECTED_FILTERS
   );
   //this.homeSearchService.searchResults = null;
   // this.route.snapshot.queryParamMap.get("page")
   //   ? (this.page = this.route.snapshot.queryParamMap.get("page"))
   //   : (this.page = 1);
   this.page = 1;
   if (isPlatformBrowser(this.platformId)) window.scrollTo(0, 0);

   //Conditions for subcategory products
   this.subcategoryId = this.route.snapshot.paramMap.get("subCategoryId");
   if (this.subcategoryId) {
     //      this.searchText = sub
     this.route.snapshot.paramMap.get("scatName") ? (this.searchText = this.route.snapshot.paramMap.get("scatName")?.split("-").join(" ")) : (this.searchText = null);

     this.searchTextType = "subcategory";
     this.route.snapshot.queryParamMap.get("field")
       ? (this.searchTextType = this.route.snapshot.queryParamMap.get("field"))
       : '';
     if (this.searchTextType == "bkeyword") this.searchTextType = null;
   } else {
     //this.route.snapshot.paramMap.get("searchText") ? (this.searchText = this.route.snapshot.paramMap.get("searchText")?.split("-").join(" ")) : (this.searchText = null);
     this.route.snapshot.paramMap.get("scatName") ? (this.searchText = this.route.snapshot.paramMap.get("scatName")?.split("-").join(" ")) : (this.searchText = null);
     this.route.snapshot.queryParamMap.get("field")
       ? (this.searchTextType = this.route.snapshot.queryParamMap.get("field"))
       : (this.searchTextType = null);

     if (this.searchTextType == null) this.searchTextType = "keyword";

     if (this.searchTextType == "bkeyword") this.searchTextType = null;
   }

   this.route.snapshot.paramMap.get("location")
     ? (this.location =
       this.route.snapshot.paramMap.get("location")?.split("-").join(" "))

     : this.location = null;

   this.location = decodeURIComponent(this.location);
   // this.location = null;

   if (this.searchTextType == null) {
     this.route.snapshot.paramMap.get("subCategoryId")
       ? (this.location =
         this.route.snapshot.paramMap.get("subCategoryId")?.split("-").join(" "))

       : this.location = null;

     this.location = decodeURIComponent(this.location);
   }


   //console.log(this.location);

   if (this.location) {
     this.homeSearchService.location = this.stringManipulation.toTitleCase(
       this.location.split("-").join(" ")
     );
   }

   if (this.searchText == "location") {
     this.keyword = this.location;
     this.homeSearchService.searchText = this.location;
   } else {
     this.keyword = this.searchText;
     this.homeSearchService.searchText = this.searchText;
   }
   this.searchProducts(this.selectedFilters);

   //console.log(this.productsgroup);
   // if (isPlatformBrowser(this.platformId)){
   //   console.log(this.selectedFilters)
   // } 
   this.keywordDescription=''
  
 }
 ngAfterViewInit() {
   const hiddenContent = document.querySelector('.hidden-content');
   if (hiddenContent) {
     hiddenContent.classList.remove('hidden-content');
   }
   //this.modalS.dismissAll();
   // if(this.selectedFilters) this.childFilter.selectedFilters = this.selectedFilters;

 }

 havetosearch(fetchData: boolean) {
   if (fetchData) {
     this.searchProducts(this.filters)
   }
 }
 public trackBy(index: any, porduct: any) {
   return porduct.value; // or any other identifier
 }


 async searchProducts(filters: any):Promise<void> {
   this.products = undefined;
  // this.homeSearchService.searchResults = null;
   let payload = {
     searchText: decodeURIComponent(this.searchText),
     searchTextType: this.searchTextType,
     filterDto: {},
   };

   if (filters && this.location != 'null') {

     this.filterDto = {
       //brandFilter: filters.brandList ? filters.brandList : null,
       //productCategoryFilter: filters.categories ? filters.categories : null,
       //keywordsFilter: filters.keywords ? filters.keywords : null,
       sellerNameFilter: filters.sellerNames ? filters.sellerNames : null,
       stateFilter: filters.states ? filters.states : null,
       productSubCategoryFilter: filters.subCategories ? filters.subCategories : null,
       ratingLower: 0,
       ratingUpper: 5
       
     };
     
     payload.filterDto = this.filterDto;
     //payload={...payload, {'aa', ""}};
     
   }
   if (this.location && this.location.trim() != "" && this.location != 'null') {
     //console.log(this.location + "Location");
     if (
       !(
         this.filterDto &&
         this.filterDto["stateFilter"] &&
         this.filterDto["stateFilter"].length > 0
       )
     ) {
       if (!this.filterDto) {
         this.filterDto = {};
       }
       this.filterDto["stateFilter"] = [
         this.stringManipulation.toTitleCase(this.location),
       ];
     }
     payload.filterDto = this.filterDto;
     //payload["filterDto"] = this.filterDto;
   }
   if (!this.filterDto) {
     this.filterDto = {};
   }
   if (filters && this.location == 'null') {
     //console.log(filters.subCategories)
     //this.mynewsearckText=filters.subCategories
    
     //this.searchText = filters.subCategories.join('');
   
    // console.log(this.mynewsearckText);
     payload = {
       searchText: decodeURIComponent(this.searchText),
       searchTextType: this.searchTextType,
       filterDto:this.filterDto,
     };
     
     this.filterDto = {
       //brandFilter: filters.brandList ? filters.brandList : null,
       //productCategoryFilter: filters.categories ? filters.categories : null,
       //keywordsFilter: filters.keywords ? filters.keywords : null,
       sellerNameFilter: filters.sellerNames ? filters.sellerNames : null,
       stateFilter: filters.states ? filters.states : null,
       productSubCategoryFilter: filters.subCategories? filters.subCategories : null,
       ratingLower: 0,
       ratingUpper: 5
     };

     payload["filterDto"] = this.filterDto;
    
   }

   //console.log(this.filterDto.productSubCategoryFilter);
   this.storeSubcat=this.filterDto.productSubCategoryFilter;
   // this.filterDto["searchText"] = this.searchText
   //   ? decodeURIComponent(this.searchText)
   //   : null;
 
   if (this.searchText == "location") {
     //payload["searchText"] = null;
     payload.searchText = '';
   }

   if (this.searchTextType == "subcategory") {
     
     this._apiSharedService
       .getSubcategoryById(this.subcategoryId)
       .subscribe((res) => {
         this.subcategoryDetails = res;
        // console.log(this.subcategoryDetails);

         //have to code
           
         this.getCategory(this.subcategoryDetails.title);

         // this.keywordDescription = res.categoryDescriptionPage;
         if (this.location == 'null')
           this.keywordDescription = res.categoryDescriptionPage;
         //console.log(this.location);
         if (
           this.location == "dubai" &&
           res.keywordDubaiDescription != null &&
           res.keywordDubaiDescription != ""
         )
           this.keywordDescription = res.keywordDubaiDescription;
         if (
           this.location == "sharjah" &&
           res.keywordSarjahDescription != null &&
           res.keywordSarjahDescription != ""
         )
           this.keywordDescription = res.keywordSarjahDescription;
         if (
           this.location == "ras al khaimah" &&
           res.keywordRasAlKhaimahDescription != null &&
           res.keywordRasAlKhaimahDescription != ""
         )
           this.keywordDescription = res.keywordRasAlKhaimahDescription;
         if (
           this.location == "umm al quwain" &&
           res.keywordUmmAlQuwainDescription != null &&
           res.keywordUmmAlQuwainDescription != ""
         )
           this.keywordDescription = res.keywordUmmAlQuwainDescription;
         if (
           this.location == "fujairah" &&
           res.keywordFujairahDescription != null &&
           res.keywordFujairahDescription != ""
         )
           this.keywordDescription = res.keywordFujairahDescription;
         if (
           this.location == "ajman" &&
           res.keywordAjmanDescription != null &&
           res.keywordAjmanDescription != ""
         )
           this.keywordDescription = res.keywordAjmanDescription;
         if (
           this.location == "abu dhabi" &&
           res.keywordAbuDhabiDescription != null &&
           res.keywordAbuDhabiDescription != ""
         )
           this.keywordDescription = res.keywordAbuDhabiDescription;

         let location = this.location != 'null'
           ? this.stringManipulation.toTitleCase(this.location)
           : "UAE";
         let searchText = this.stringManipulation.toTitleCase(
           this.searchText
         );
         this.image = "na";
        
         if (res.metaTitle && res.metaTitle != null) {
           this.seoService.setSubcategorySeo(res, location);
         } else {
           this.seoService.setSeoAttributes(
             new Seo({
               title:
                 searchText +
                 " at best price in " +
                 location +
                 " on Tradersfind.com", //+
               //searchText +
               //" Companies",
               metaTitle:
                 searchText +
                 " at best price in " +
                 location +
                 " on Tradersfind.com",
               metaDescription:
                 "Searching for " +
                 searchText +
                 " at best price in " +
                 location +
                 "? Choose from a wide range of companies provide " +
                 searchText +
                 " online on Tradersfind.com",
               metaKeywords:
                 searchText +
                 ", " +
                 searchText +
                 " in " +
                 location +
                 "",
             })
           );
         }
       });
   }
   else if (this.searchTextType == "seller") {
   
     this._apiSharedService
       .getSellerByCompanyName(this.searchText)
       .subscribe((res) => {
         if (res && res[0]) {
           this.seoService.setSellerSeo(res[0]);
         }
       });
   }
   else if (this.searchTextType == "keyword") {
    //console.log(this.searchText)
     this._apiSharedService
       .getKeywordByName(this.searchText)
       .subscribe((res) => {
         if (res) {
           //console.log(res);
           this.keywordDetails = res;
           this.keywordDescription = res.keywordDescription;
           //console.log(this.location);
           if (
             this.location == "dubai" &&
             res.keywordDubaiDescription != null &&
             res.keywordDubaiDescription != ""
           )
             this.keywordDescription = res.keywordDubaiDescription;
           if (
             this.location == "sharjah" &&
             res.keywordSarjahDescription != null &&
             res.keywordSarjahDescription != ""
           )
             this.keywordDescription = res.keywordSarjahDescription;
           if (
             this.location == "ras al khaimah" &&
             res.keywordRasAlKhaimahDescription != null &&
             res.keywordRasAlKhaimahDescription != ""
           )
             this.keywordDescription = res.keywordRasAlKhaimahDescription;
           if (
             this.location == "umm al quwain" &&
             res.keywordUmmAlQuwainDescription != null &&
             res.keywordUmmAlQuwainDescription != ""
           )
             this.keywordDescription = res.keywordUmmAlQuwainDescription;
           if (
             this.location == "fujairah" &&
             res.keywordFujairahDescription != null &&
             res.keywordFujairahDescription != ""
           )
             this.keywordDescription = res.keywordFujairahDescription;
           if (
             this.location == "ajman" &&
             res.keywordAjmanDescription != null &&
             res.keywordAjmanDescription != ""
           )
             this.keywordDescription = res.keywordAjmanDescription;
           if (
             this.location == "abu dhabi" &&
             res.keywordAbuDhabiDescription != null &&
             res.keywordAbuDhabiDescription != ""
           )
             this.keywordDescription = res.keywordAbuDhabiDescription;

           if (this.location) {
             for (let key of Object.keys(res)) {
               if (Array.isArray(res[key])) {
                 for (let i = 0; i < res[key].length; i++) {
                   res[key][i] = res[key][i].replace(
                     /UAE/g,
                     this.stringManipulation.toTitleCase(this.location)
                   );
                   res[key][i] = res[key][i].replace(
                     /uae/g,
                     this.stringManipulation.toTitleCase(this.location)
                   );
                 }
               }
               res[key] =
                 res[key] && typeof res[key] == "string"
                   ? res[key].replace(
                     /UAE/g,
                     this.stringManipulation.toTitleCase(this.location)
                   )
                   : res[key];
               res[key] =
                 res[key] && typeof res[key] == "string"
                   ? res[key].replace(
                     /uae/g,
                     this.stringManipulation.toTitleCase(this.location)
                   )
                   : res[key];
             }
           }
           this.seoService.createAndSetSeoAttributes(res);
         } else {
          
           let location = this.location
             ? this.stringManipulation.toTitleCase(this.location)
             : "UAE";
           let searchText = this.stringManipulation.toTitleCase(
             this.searchText
           );
           this.image = "na";
           this.seoService.setSeoAttributes(
             new Seo({
               title:
                 searchText +
                 " at best price in " +
                 location +
                 " on Tradersfind.com", //+
               //searchText +
               //" Companies",
               metaTitle:
                 searchText +
                 " at best price in " +
                 location +
                 " on Tradersfind.com",
               metaDescription:
                 "Searching for " +
                 searchText +
                 " at best price in " +
                 location +
                 "? Choose from a wide range of companies provide " +
                 searchText +
                 " online on Tradersfind.com",
               metaKeywords:
                 searchText +
                 ", " +
                 searchText +
                 " in " +
                 location +
                 "",
             })
           );
         }
       });
   } 
   else {
     console.log("Blind");
     this._apiSharedService
       .getBlindKeywordByName(this.searchText)
       .subscribe((res) => {
         
        // console.log(res)
         if (res) {
          // console.log("blind" + res);
          
           this.keywordDetails = res;
           // this.keywordDescription = res.keywordDescription;
           if (this.location == 'null')
             this.keywordDescription = res.categoryDescriptionPage;
         //  console.log(this.location);
           if (
             this.location == "dubai" &&
             res.keywordDubaiDescription != null &&
             res.keywordDubaiDescription != ""
           )
             this.keywordDescription = res.keywordDubaiDescription;
           if (
             this.location == "sharjah" &&
             res.keywordSarjahDescription != null &&
             res.keywordSarjahDescription != ""
           )
             this.keywordDescription = res.keywordSarjahDescription;
           if (
             this.location == "ras al khaimah" &&
             res.keywordRasAlKhaimahDescription != null &&
             res.keywordRasAlKhaimahDescription != ""
           )
             this.keywordDescription = res.keywordRasAlKhaimahDescription;
           if (
             this.location == "umm al quwain" &&
             res.keywordUmmAlQuwainDescription != null &&
             res.keywordUmmAlQuwainDescription != ""
           )
             this.keywordDescription = res.keywordUmmAlQuwainDescription;
           if (
             this.location == "fujairah" &&
             res.keywordFujairahDescription != null &&
             res.keywordFujairahDescription != ""
           )
             this.keywordDescription = res.keywordFujairahDescription;
           if (
             this.location == "ajman" &&
             res.keywordAjmanDescription != null &&
             res.keywordAjmanDescription != ""
           )
             this.keywordDescription = res.keywordAjmanDescription;
           if (
             this.location == "abu dhabi" &&
             res.keywordAbuDhabiDescription != null &&
             res.keywordAbuDhabiDescription != ""
           )
             this.keywordDescription = res.keywordAbuDhabiDescription;

           if (this.location) {
             for (let key of Object.keys(res)) {
               if (Array.isArray(res[key])) {
                 for (let i = 0; i < res[key].length; i++) {
                   res[key][i] = res[key][i].replace(
                     /UAE/g,
                     this.stringManipulation.toTitleCase(this.location)
                   );
                   res[key][i] = res[key][i].replace(
                     /uae/g,
                     this.stringManipulation.toTitleCase(this.location)
                   );
                 }
               }
               res[key] =
                 res[key] && typeof res[key] == "string"
                   ? res[key].replace(
                     /UAE/g,
                     this.stringManipulation.toTitleCase(this.location)
                   )
                   : res[key];
               res[key] =
                 res[key] && typeof res[key] == "string"
                   ? res[key].replace(
                     /uae/g,
                     this.stringManipulation.toTitleCase(this.location)
                   )
                   : res[key];
             }
           }
           this.seoService.createAndSetSeoAttributes(res);
         } else {
           let location = this.location == 'null' ? 'UAE' : this.location
             ? this.stringManipulation.toTitleCase(this.location)
             : "UAE";
           let searchText = this.stringManipulation.toTitleCase(
             this.searchText
           );
           this.image = "na";
           this.seoService.setSeoAttributes(
             new Seo({
               title:
                 searchText +
                 " at best price in " +
                 location +
                 " on Tradersfind.com", //+
               //searchText +
               //" Companies",
               metaTitle:
                 searchText +
                 " at best price in " +
                 location +
                 " on Tradersfind.com",
               metaDescription:
                 "Searching for " +
                 searchText +
                 " at best price in " +
                 location +
                 "? Choose from a wide range of companies provide " +
                 searchText +
                 " online on Tradersfind.com",
               metaKeywords:
                 searchText +
                 ", " +
                 searchText +
                 " in " +
                 location +
                 "",
             })
           );
         }
       });
   }

   // if (isPlatformBrowser(this.platformId)) {
   //   if (this.authservice.loggedInUserDetails) {
   //     var qryparamslog = {
   //       page: this.page - 1,
   //       size: this.size,
   //       userId: this.authservice.loggedInUserDetails.id,
   //     };
   //   } else {
   //     var qryparams = {
   //       page: this.page - 1,
   //       size: this.size,
   //     };
   //   }
   //   //console.log("Banner API Start " + payload.searchText);
     
   //   this._apiSharedService.getBannerByKeyword(payload.searchText,'Search Product Top').subscribe((banner) => {
     
   //     if (banner) {
   //       this.AllGuestBannersTemp = banner;
   //       console.log(this.AllGuestBannersTemp);
   //     }
   //   });



     //console.log("search API calling start")
     //console.log(payload);
     this._apiSharedService
       .searchProducts(
         payload,
         //this.authservice.loggedInUserDetails ? qryparamslog : qryparams  
         { page: this.page - 1, size: this.size, }
       )
       .subscribe(async (res) => {
       //console.log(res)
         if (
           (res.body.products && res.body.products.length > 0) ||
           res.body.sponsoredProduct
         ) {
           
           this.filters = {
             // brandList: res.body.brandList.map((brand: any) => {
             //    return { name: brand, checked: false };
             //  }),
             // categories: res.body.categories.map((category: any) => {
             //    return { name: category, checked: false };
             //  }),
             sellerNames: res.body.sellerNames.map((seller: any) => {
               return { name: seller, checked: false };
             }),
             states: res.body.states.map((state: any) => {
               
               return { name: state, checked: false };
             }),

             subCategories: res.body.subCategories.map((subcategory: any) => {
               let checked = false;
               if(this.storeSubcat!=null){
               const cont= this.storeSubcat.length
               
               for(let i=0; i<cont;i++){
                 if(this.storeSubcat[i]==subcategory){
                   checked=true
                 }
               }
             }
               return {
                 name: subcategory,
                 checked:checked ,
               };
             }),
             //  productname: res.body.productname.map((productname: any) => {
             //     return { name: productname, checked: false };
             //    }),
           };
           //console.log(res.body.locationProductCounts);
           this.uppersrcHedder=this.filters.states
           //console.log(this.filters);
           //console.log("--");
           //console.log(StorageService.SEARCH_FILTERS);
           this.storageService.setItem(
             StorageService.SEARCH_FILTERS,
             this.filters
           );

         } else {
           this.filters = this.storageService.getItem(
             StorageService.SEARCH_FILTERS
           );
         }
       
         this.products = res.body.products;

         if(this.productsgroup1==null){
             this.productsgroup=[]
            // console.log(this.productsgroup1);
         }
       
         this.productsgroup = this.productsgroup.concat(this.products.reduce((group: any, product: any, index: number) => {
        //   console.log(this.productsgroup);
           const { sellerCompanyName } = product;
           let sequenceno = null;
           
          
           if (sequenceno === null) {
             sequenceno = `s_${index}`;
           }
           if (!group.hasOwnProperty(sequenceno)) {
             group[sequenceno] = [];
           }
           group[sequenceno].push(product);

           return group;
         }, {}));
       
         //console.log(this.productsgroup);

         this.sponsoredProduct = res.body.sponsoredProduct;

         this.totalLength = res.headers.get("x-total-count");
          this.loltu=res.headers.get("text-yuo");
         // console.log(this.loltu)
         //console.log(this.totalLength)
         //console.log(this.totalLength);
         //console.log(this.filters.brandList);
         //console.log(this.filters.subCategories);
         this.homeSearchService.searchResults = null;

         /*          if (
                     this.searchTextType == null &&
                     this.products &&
                     this.products.length > 0
                   ) {
                     // console.log("post item" + this.searchText);
                     this._apiSharedService
                       .postBlindKeyword({
                         title: this.searchText,
                         metaKeywords: [],
                         createdDate: new Date(),
                         keywordResultCount: this.totalLength,
                         status: "Inactive",
                       })
                       .subscribe((res) => {
                         console.log("res");
                       });
                   } */

         // update keyword count
         /* if (
            this.searchTextType == "keyword" &&
            this.products &&
            this.products.length > 0
          ) {
            // console.log("post item" + this.searchText);
            this._apiSharedService
              .updateKeywordResultCount({
                id: this.keywordDetails.id,
                keywordResultCount: this.totalLength,
              })
              .subscribe((res) => {
                console.log("res");
              });
          }*/
       });
   }
 
 getCategory(id: any) {
   this._apiSharedService
     .getCategoryByIdNa(id, {
       size: 200,
       sort: 'categoryName',
     })
     .subscribe((res) => {
      // console.log(res);
       this.categoryDetails = res[0];
       this.getIndustry(this.categoryDetails.title);
       // this.all_categories = res.productsCategories;
       //console.log(this.all_categories);

     }, ((err) => { console.log(err); }));

   //return industryName;
 }

 getIndustry(id: any) {

   this._apiSharedService
     .getIndustryByIdNa(id, {
       size: 200,
       sort: 'industryName'
     })
     .subscribe((res) => {

       console.log(res);
      

       //console.log(res);
       this.industryDetails = res[0];


       // this.all_categories = res.productsCategories;
       //console.log(this.all_categories);

     }, ((err) => { console.log(err); }));

 }

 getFilterSubCategory(catId: any, event: any) {
   // this.selected
   if( this.selectedFilters!=null){
     //console.log(this.selectedFilters)
     //console.log(this.mynewsearckText)
   }
 
   if (event.target.checked){
  
     this.filterCategory.push(catId)
     
   }else{
     this.filterCategory = this.filterCategory.filter(function (e) { return e !== catId });
   }
   //console.log(this.filterCategory);
    
   this.selectedFilters  = { 'subCategories': this.filterCategory };
   //console.log(JSON.stringify(this.selectedFilters, null, 2));

   this.storageService.setItem(
     StorageService.SELECTED_FILTERS,
     this.selectedFilters
   );
   this.page = 1;
   // this._router.navigate([], {
   //   relativeTo: this.route,
   //   queryParams: { page: this.page },
   //   queryParamsHandling: "merge",
   // });

   this.mynewsearckText=this.selectedFilters
   
 }
 letsApplyFilter(){
   //this.mynewsearckText = { 'subCategories': this.mynewsearckText };
   this.storageService.setItem(
     StorageService.SELECTED_FILTERS,
     this.selectedFilters
   );
   this.ctr=12;
   this.page = 1;
   if(this.mynewsearckText!=null){
 
   this.searchProducts(this.mynewsearckText);
   this.productsgroup = [];
   if (isPlatformBrowser(this.platformId)) window.scrollTo(0, 0);
   }else{
     // this.messageService.add({
     //   severity: "error",
     //   summary: "chose any filter",
     // });
     
   }
   this.productsgroup1 = "hello";
   //console.log(this.totalLength,this.ctr)
   this.mynewsearckText=null
  // this.selectedFilters=[]
 }
 letsClearFilter(){
   this.page = 1;
   this.filterDto={}
   this.selectedFilters=[]
   this.filterCategory=[]
   this.storageService.setItem(
     StorageService.SELECTED_FILTERS,
     this.selectedFilters
   );
   this.productsgroup1 = null;
   //console.log(this.filterDto)
    this.searchProducts(this.searchText);
   
    if (isPlatformBrowser(this.platformId)) window.scrollTo(0, 0);
 }

 // /*
 //   getFilterByProductSeller() {
 //     const groupedProducts = [];
 //     let currentProduct = null;
 
 //     for (const product of this.products) {
 //       if (currentProduct && currentProduct.name == product.name) {
 //         currentProduct.sellers.push(product.seller);
 //       } else {
 //         currentProduct = { ...product };
 //         currentProduct.sellers = [product.seller];
 //         groupedProducts.push(currentProduct);
 //       }
 //     }
 //     this.products = groupedProducts;
 //   }
 
 //   getGroupedBySellers() {
 //     let groupedProducts1 = this.products;
 //     groupedProducts1 = [];
 //     for (const product of this.products) {
 //       const seller = product.seller;
 //       if (!groupedProducts1.hasOwnProperty(seller)) {
 //         groupedProducts1[seller] = [];
 //       }
 //       groupedProducts1[seller].push(product);
 //     }
 //     this.products = Object.values(groupedProducts1).flat();
 //   }*/

 // getFilterByBrand(brandName: any, event: any) {
 //   // this.selected
 //   if (event.target.checked)
 //     this.filterbrand.push(brandName)
 //   else
 //     this.filterbrand = this.filterbrand.filter(function (e) { return e !== brandName });

 //   this.selectedFilters = { 'brandList': this.filterbrand };
 //   console.log(this.selectedFilters);
 //   this.storageService.setItem(
 //     StorageService.SELECTED_FILTERS,
 //     this.selectedFilters
 //   );
 //   this.page = 1;
 //   this._router.navigate([], {
 //     relativeTo: this.route,
 //     queryParams: { page: this.page },
 //     queryParamsHandling: "merge",
 //   });
 //   this.searchProducts(this.selectedFilters);
 //   if (isPlatformBrowser(this.platformId)) window.scrollTo(0, 0);
 // }


 // filtersChanged(event: any) {
 //   this.selectedFilters = JSON.parse(JSON.stringify(event));
 //   this.storageService.setItem(
 //     StorageService.SELECTED_FILTERS,
 //     this.selectedFilters
 //   );
 //   this.page = 1;
 //   this._router.navigate([], {
 //     relativeTo: this.route,
 //     queryParams: { page: this.page },
 //     queryParamsHandling: "merge",
 //   });
 //   this.searchProducts(this.selectedFilters);
 //   if (isPlatformBrowser(this.platformId)) window.scrollTo(0, 0);
 // }

 // getNext(event: any) {
 //   this.page = event;
 //   this._router.navigate([], {
 //     relativeTo: this.route,
 //     queryParams: { page: this.page },
 //     queryParamsHandling: "merge",
 //   });
 //   if (isPlatformBrowser(this.platformId)) window.scrollTo(0, 0);
 // }


 getCategoryUrl(name: any, id: any) {
   return this._urlservice.getCategoryUrl(name, id);
 }

 getIndustryUrl(indName: string, id: any) {
   return '/industry/' + indName.toLowerCase().replace(/&|\,|\s/g, '-').replace(/-+/g, "-") + '/' + id;
 }
 getSubCategoryLocUrl(catName: string, subcatName: string, loc: string, id: any) {
   return this._urlservice.getSubcategoryLocUrl(catName, subcatName, loc, id)
 }
 
 getSearchString(kwd: string) {
   
   return kwd.trim().toLowerCase().replace(/&|\,|\s/g, '-').replace(/-+/g, "-");
 }

 toggleShowMore1() {
   this.showMore1 = !this.showMore1;
 } // for short description show more lesss

 // toggleShowMore() {
 //   this.showMore = !this.showMore;
 // }

 // @HostListener('window:scroll', [])
 // onScroll(): void {
 //   if (this.loadingRef) {
 //     const loadingElement = this.loadingRef.nativeElement;
 //     const rect = loadingElement.getBoundingClientRect();
 //     const windowHeight = window.innerHeight;

 //     if (rect.top <= windowHeight) {
 //       this.toggleShowMore();
 //       this.page++;
 //       this.searchProducts(this.selectedFilters);
 //       this.ctr += this.size;
 //     }
 //   } else if (this.loadnextRef) {
 //     this.toggleShowMore();
 //   }
 // }
 loadmore() {

   this.itr=this.page;
   this.page++;
   //console.log(this.ctr,this.totalLength,this.page);
   this.searchProducts(this.selectedFilters);
   this.ctr += this.size;
   this.productsgroup1="welcome"
 }
}