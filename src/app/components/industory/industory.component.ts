import { CommonModule, isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject, OnInit, PLATFORM_ID, Renderer2, makeStateKey } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ApiSharedService } from '../../services/api-shared.service';
import { ImageService } from '../../services/image.service';
import { PostRequirementServiceService } from '../../services/post-requirement-service.service';
import { UrlService } from '../../services/url.service';
import { OtpComponent } from '../dialog/otp/otp.component';
import { LoadpComponent } from '../shared/loadp/loadp.component';
import { HeaderSubComponent } from '../header-sub/header-sub.component';
import { FooterComponent } from '../footer/footer.component';
import { TradersImgComponent } from '../shared/traders-img/traders-img.component';
import { BannerAdvComponent } from '../shared/banner-adv/banner-adv.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { IndustoryModule } from './industory.module';
import { MessageService } from 'primeng/api';
import { TransferState } from '@angular/core'
import { Observable,of } from 'rxjs';

const DATA_KEY = makeStateKey<any>('my-data');
@Component({
  selector: 'app-industory',
  standalone: true,
  imports: [ CommonModule,NgxPaginationModule,ReactiveFormsModule,OtpComponent,LoadpComponent, 
    HeaderSubComponent, TradersImgComponent, NgxPaginationModule,RouterLink,BannerAdvComponent,FooterComponent],
  providers:[PostRequirementServiceService,MessageService],
  templateUrl: './industory.component.html',
  styleUrl: './industory.component.css'
})
export class IndustoryComponent implements OnInit, AfterViewInit {
  popular_categories: any[] = [];
  popular_subcategories: any[] = [];
  all_categories: any[] = [];
  all_subcategories: any[] = [];
  temp_all_categories: any[] = [];
  // filterProductSubCategories:AnimationKeyframesSequenceMetadata;
  categoryId: any;
  categoryName: any;
  totalLength: any;
  page: any;
  alphabets = [
    'ALL',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];
  //searchKeywordControl = new FormControl('');
  tempAllCategories: any[] = [];
  tempAllSubcategories: any[] = [];
  restCategories: any[] = [];
  categorySize = 12;
  constructor(
    private _apiSharedService: ApiSharedService,
    private imageService: ImageService,
    private _router: Router,
    private route: ActivatedRoute,
    private _urlservice: UrlService,
    public requirementService: PostRequirementServiceService,
    @Inject(PLATFORM_ID) private platformId: any,
    private renderer: Renderer2, private el: ElementRef,
    private transferState:TransferState
  ) { }

  ngOnInit(): void {
    this.requirementService.initializeRequirementForm();
    window.scrollTo(0,0) ;
    this.route.snapshot.queryParamMap.get("page")
      ? (this.page = this.route.snapshot.queryParamMap.get("page"))
      : (this.page = 1);
    //console.log(this.page);
    //this.getPoppularCategories();
    const storeData = this.transferState.get(makeStateKey<any>('my-data'),null);
    console.log(storeData);
    if (storeData) {
      this.transferState.remove(makeStateKey<any>('my-data'));
      this.popular_categories = storeData;
      console.log('store data')
    } else {
      this.getPoppularCategories();
      this.transferState.set(makeStateKey<any>('my-data'),this.popular_categories);
      console.log(storeData);
      console.log('first time')
    }
  }

   ngAfterViewInit(): void {
     // Remove the CSS class to display the content on the client side
    const hiddenContent = document.querySelector('.hidden-content');
    if (hiddenContent) {
      hiddenContent.classList.remove('hidden-content');
    } 
  }
  
 
  /*getAllCategories() {
    this._apiSharedService
      .getAllProductCategoriesIdName(0, 10000)
      .subscribe((res: any) => {
        this.tempAllCategories = res;
        //this.filterCategoriesOrSubcategories(this.tempAllCategories,'categoryName')
      });
  }
*/
  getPoppularCategories() {
    this._apiSharedService
      .getIndustries(this.categorySize, this.page)
      .subscribe(
        (res) => {
          this.popular_categories = res.body;
          //console.log(res.body);
          //console.log(this.popular_categories);
          this.totalLength = res.headers.get("x-total-count");
          this.popular_categories = this.popular_categories.filter(
            (obj) =>
              obj.id !== '' && obj.categoryName !== '' && obj.status != 'false'
          );
          this.popular_categories.forEach((element: any) => {
            if (element.image != null)
              this.imageService.getImageContent(element.image);
          });
        },
        (error) => { }
      );
  }

  getUrl(id: any, name: any) {
    // if(this.categoryId){
    //   return '/subcategory/' + this.categoryName.toLowerCase().replace(/[ ,]/g, "-") + '/'+ name.toLowerCase().replace(/[ ,]/g, "-") + '/' + id;
    // }else{
    //   return '/category/' + name.toLowerCase().replace(/[ ,]/g, "-") + '/' + id;
    // }
    //return '/category/' + name.toLowerCase().replace(/[ ,]/g, '-') + '/' + id;
    return this._urlservice.getCategoryUrl(name, id);
  }
  getSubCatUrl(id: any, catname: any, name: any) {
    //return '/subcategory/' + catname.toLowerCase().replace(/[ ,]/g, "-") + '/' + name.toLowerCase().replace(/[ ,]/g, "-") + '/' + id;
    return this._urlservice.getSubcategoryUrl(catname, name, id);
  }

  getIndustryUrl(indName: string, id: any) {
    return '/industry/' + indName.toLowerCase().replace(/&|\,|\s/g, '-').replace(/-+/g, "-") + '/' + id;
  }

  getNext(event: any) {
    // this.page = event;
    event ? this.page = event : this.page = 1
    this.getPoppularCategories();
    this._router.navigate([], {
      relativeTo: this.route,
      queryParams: { page: this.page },
      queryParamsHandling: "merge",
    });
    if (isPlatformBrowser(this.platformId)) window.scrollTo(0, 0);
  }

  findActive(items: any) {
    return items.filter(
      (obj: any) =>
        obj.id !== '' && obj.categoryName !== '' && obj.status != 'false'
    );
  }
}
