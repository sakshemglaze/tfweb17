import { Component, OnInit, HostListener } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ApiSharedService } from '../../services/api-shared.service';
import { ActivatedRoute } from '@angular/router';
import { ImageService } from '../../services/image.service';
import { UrlService } from '../../services/url.service';
import { PostRequirementServiceService } from '../../services/post-requirement-service.service';
import { SeoService } from '../../services/seo.service';
import { CommonModule } from '@angular/common';
import { OtpComponent } from '../dialog/otp/otp.component';
import { LoadpComponent } from '../shared/loadp/loadp.component';
import { HeaderSubComponent } from '../header-sub/header-sub.component';
import { TradersImgComponent } from '../shared/traders-img/traders-img.component';
import { BannerAdvComponent } from '../shared/banner-adv/banner-adv.component';
import { FooterComponent } from '../footer/footer.component';
@Component({
  selector: 'app-category',
  standalone: true,
  imports: [FooterComponent,CommonModule,ReactiveFormsModule,OtpComponent,LoadpComponent, HeaderSubComponent, TradersImgComponent,BannerAdvComponent],
  providers:[PostRequirementServiceService],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit{
  popular_categories: any[] = [];
  popular_subcategories: any[] = [];
  all_categories: any[] = [];
  all_subcategories: any[] = [];
  temp_all_categories: any[] = [];
  filterProductSubCategories: any;
  categoryId: any;
  categoryName: any;
  categoryDetails: any;
  industryDetails: any;

  isLoading: boolean = false;
  loadedProducts: any[] = [];
  pageSize: number = 2;

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
  searchKeywordControl = new FormControl('');
  tempAllCategories: any[] = [];
  tempAllSubcategories: any[] = [];
  categorySize = 4;

  constructor(
    private _apiSharedService: ApiSharedService,
    private route: ActivatedRoute,
    private imageService: ImageService,
    private _urlservice: UrlService,
    private SeoService:SeoService,
    public requirementService: PostRequirementServiceService,
  ) { }
  ngOnInit(): void {
    this.requirementService.initializeRequirementForm();
    this.categoryId = this.route.snapshot.paramMap.get('categoryid');
    this.categoryName = this.route.snapshot.paramMap.get('categoryname');
    if (this.categoryId) {
      this.getAllSubcategories();
    } else {
      this.getPoppularCategories();
      this.getAllCategories();
    }
    this.loadInitialProducts();
  }

  loadInitialProducts() {
    this.loadedProducts = this.popular_categories.slice(0, this.pageSize);
  }

  ngAfterViewInit(): void {
          // Remove the CSS class to display the content on the client side
    const hiddenContent = document.querySelector('.hidden-content');
    if (hiddenContent) {
      hiddenContent.classList.remove('hidden-content');
    }
  }

  getIndustry(id: any) {

    this._apiSharedService
      .getIndustryById(id, {
        size: 200,
        sort: 'industryName'
      })
      .subscribe((res) => {
        //console.log(res);
        this.industryDetails = res;

        // this.all_categories = res.productsCategories;
        //console.log(this.all_categories);

      }, ((err) => { console.log(err); }));

    //return industryName;
  }
  getPoppularCategories() {
    this._apiSharedService
      .getPopularProductCategories(this.categorySize)
      .subscribe(
        (res) => {
          this.popular_categories = res;
          this.popular_categories = this.popular_categories.filter(
            (obj) =>
              obj.id !== '' && obj.categoryName !== '' && obj.status != 'false'
          );
        },
        (error) => { }
      );
    this.popular_categories.forEach((element: any) => {
      this.imageService.getImageContent(element.image);
    });
  }

  getPopularSubategories(subcategories: any) {
    this.popular_subcategories = subcategories;
    this.popular_subcategories = this.popular_subcategories.filter(
      (obj) =>
        obj.id !== '' && obj.subCategoryName !== '' && obj.status != 'false'
    );
    //Sort by
    this.popular_subcategories.sort((a, b) => b.hitCount - a.hitCount);
    this.popular_subcategories.forEach((element: any) => {
      this.imageService.getImageContent(element.image);
    });
  }

  getAllCategories() {
    this._apiSharedService
      .getAllProductCategoriesIdName(0, 10000)
      .subscribe((res) => {
        this.tempAllCategories = res;
        this.filterCategoriesOrSubcategories(
          this.tempAllCategories,
          'categoryName'
        );
      });
  }

  getAllSubcategories() {
    this._apiSharedService
      .getCategoryById(this.route.snapshot.paramMap.get('categoryid'), {
        size: 200,
        sort: 'categoryName',
      })
      .subscribe((res) => {
        this.categoryDetails = res;
        if (res.title)
        console.log(res);
          this.getIndustry(res.title);
        this.imageService.getImageContent(this.categoryDetails.image);
        this.tempAllSubcategories = res.productsSubcategories;
        this.getPopularSubategories(res.productsSubcategories);
        this.filterCategoriesOrSubcategories(
          this.tempAllSubcategories,
          'subCategoryName'
        );
        if(res.metaTitle && res.metaTitle != null) {
          this.SeoService.setCategorySeo(res)
        }
      });
  }

  filterCategoriesOrSubcategories(res: any, name: any) {
    this.all_categories = res.filter(
      (obj: any) =>
        obj.id !== '' && obj[name] && obj[name] !== '' && obj.status != 'false'
    );
    this.all_categories.sort((a, b) =>
      a[name].localeCompare(b[name], 'es', { sensitivity: 'base' })
    );
    let data = this.all_categories.reduce((r, e) => {
      let alphabet = e[name][0];
      if (!r[alphabet]) r[alphabet] = { alphabet, record: [e] };
      else r[alphabet].record.push(e);
      return r;
    }, {});
    this.all_categories = Object.values(data);
    this.temp_all_categories = this.all_categories;
  }
  getUrl(id: any, name: any) {
    if (this.categoryId) {
      return (
        //'/subcategory/' + name.toLowerCase().replace(/[ ,]/g, '-') + '/' + id
        this._urlservice.getSubcategoryUrl(this.categoryName,name,id)
      );
    } else {
      //return '/category/' + name.toLowerCase().replace(/[ ,]/g, '-') + '/' + id;
      return this._urlservice.getCategoryUrl(name,id);
    }
  }

  getIndustryUrl(indName: string, id: any) {
    return '/industry/' + indName.toLowerCase().replace(/&|\,|\s/g, '-').replace(/-+/g,"-") + '/' + id;
  }
  @HostListener('window:scroll', ['$event'])
  loadMoreProducts() {
    const startIndex = this.loadedProducts.length;
    const endIndex = startIndex + this.pageSize;
    this.loadedProducts = [...this.loadedProducts, ...this.popular_categories.slice(startIndex, endIndex)];
  }

  onScroll(event: any) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight && !this.isLoading) {
      this.isLoading = true;
      this.loadMoreProducts();
      // Simulate async loading with timeout
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    }
  }

}
