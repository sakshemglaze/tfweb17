import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

import { ApiSharedService } from '../../services/api-shared.service';
import { ImageService } from '../../services/image.service';
import { UrlService } from '../../services/url.service';
import { TradersImgComponent } from '../shared/traders-img/traders-img.component';
import { HeaderSubComponent } from '../header-sub/header-sub.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { MessageService } from 'primeng/api';
import { PostRequirementServiceService } from '../../services/post-requirement-service.service';
import { FooterComponent } from '../footer/footer.component';
@Component({
  selector: 'app-browse-sellers',
  standalone: true,
  imports: [FooterComponent,CommonModule,NgxPaginationModule, HeaderSubComponent,TradersImgComponent],
  providers:[PostRequirementServiceService,MessageService],
  templateUrl: './browse-sellers.component.html',
  styleUrl: './browse-sellers.component.css'
})
export class BrowseSellersComponent {
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
    private _urlservice:UrlService,
    @Inject(PLATFORM_ID) private platformId: any,
    
  ) {  this._router.events.subscribe((event) => {
    if (event instanceof NavigationEnd) {
      window.scrollTo(0, 0); // Scroll to the top on route change
    }
  }); }

  ngAfterViewInit(): void {
    //throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    this.route.snapshot.queryParamMap.get("page")
      ? (this.page = this.route.snapshot.queryParamMap.get("page"))
      : (this.page = 1);
    console.log(this.page);
    this.getPoppularCategories();
  }

  getAllCategories() {
    this._apiSharedService
      .getAllProductCategoriesIdName(0, 10000)
      .subscribe((res: any) => {
        this.tempAllCategories = res;
        //this.filterCategoriesOrSubcategories(this.tempAllCategories,'categoryName')
      });
  }

  getPoppularCategories() {

    this._apiSharedService
      .getIndustries(this.categorySize, this.page)
      .subscribe(
        (res) => {
          this.popular_categories = res.body;
          console.log(res.body);
          //this.restCategories = res.productsCategories;
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
    return this._urlservice.getCategoryUrl(name,id);
  }
  getSubCatUrl(id: any, catname: any, name: any) {

    //return '/subcategory/' + catname.toLowerCase().replace(/[ ,]/g, "-") + '/' + name.toLowerCase().replace(/[ ,]/g, "-") + '/' + id;
     return this._urlservice.getSubcategoryUrl(catname,name,id);

  }

  getIndustryUrl(indName: string, id: any) {
    return '/industry/' + indName.toLowerCase().replace(/&|\,|\s/g, '-').replace(/-+/g,"-")+ '/' + id;
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
}
