import { Component } from '@angular/core';
import { ApiSharedService } from '../../services/api-shared.service';
import { UrlService } from '../../services/url.service';
import { CommonModule, DatePipe } from '@angular/common';
import { ImageService } from '../../services/image.service';
import { HeaderSubComponent } from '../header-sub/header-sub.component';
import { TradersImgComponent } from '../shared/traders-img/traders-img.component';
import { BannerAdvComponent } from '../shared/banner-adv/banner-adv.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FooterComponent } from '../footer/footer.component';
@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [FooterComponent,CommonModule,NgxPaginationModule,HeaderSubComponent,TradersImgComponent,BannerAdvComponent],
  providers:[DatePipe],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.css'
})
export class BlogListComponent {
  
  blogList: any[] = [];
  selyear: any;
  html = '';
  page: number = 1
  size = 6;
  totalCount: any;
  blogCat: any[] = [];
  dropdownList = [];
  //selectedItems = [];
  // dropdownSettings: IDropdownSettings = {
  //   singleSelection: false,
  //   idField: 'item_id',
  //   textField: 'item_text',
  //   selectAllText: 'Select All',
  //   unSelectAllText: 'UnSelect All',
  //   itemsShowLimit: 1,
  //   allowSearchFilter: true
  // };
  cat_drop = [];
  category: any;
  selectedButton: any;
  date: any;
  //mon: number;
  years = [];
  lst: any;
  firstDate: any;
  lastDate: any;
  selectAll = [];
  grcat: any;
  selectedMonth: any;
  selectedYear: any;;
  selectedLanguage: any;;
  selectedCategories: any[] = [];
  isShowShimmer: any;
  constructor(
    private apiService: ApiSharedService,
    public urlService: UrlService,
    public datepipe: DatePipe,
    private imageService: ImageService,
    //private seoService: SeoService,
  ) { }

  ngOnInit(): void {

    this.onChangeFilter();
    
    this.apiService.getBlogCategories().subscribe({
      next: (res: any) => {
        this.blogCat = res.body;
        console.log(this.blogCat);
        this.blogCat.forEach((element: any) => {
          if (element.categoryName && element.categoryName.trim() != '') {
            // this.dropdownList.push({ item_id: element.id, item_text: element.categoryName });
          }
        });
        // this.dropdownList = this.dropdownList.sort((a, b) => (a.item_text > b.item_text) ? 1 : ((b.item_text > a.item_text) ? -1 : 0))
      },
      error: (error) => {

      }
    });

  }

  ngAfterViewInit(): void {
          // Remove the CSS class to display the content on the client side
    const hiddenContent = document.querySelector('.hidden-content');
    if (hiddenContent) {
      hiddenContent.classList.remove('hidden-content');
    }
  }
  
  paginateBlogs(event?: number) {
    // console.log(event);
    event ? this.page = event : this.page = 1
    this.onChangeFilter();
  }

  getFitler(catId: string) {
    console.log(catId);
    this.selectedButton = catId;
    this.selectedCategories[0] = catId;
    this.onChangeFilter();
  }

  onChangeFilter(attribute?: string | undefined, value?: any | undefined) {
    let payload = {}
    let startDate = null, endDate = null, dateFilter = null;
    this.isShowShimmer = true;
    if (attribute == 'month') {
      this.selectedMonth = parseInt(value) > 0 ? parseInt(value) : null;
    } else if (attribute == 'year') {
      this.selectedYear = parseInt(value) > 0 ? parseInt(value) : null;
    } else if (attribute == 'language') {
      this.selectedLanguage = value != 'None' ? value : null;
    }

    if (this.selectedMonth && this.selectedYear) {
      startDate = new Date(this.selectedYear, this.selectedMonth - 1, 1);
      endDate = new Date(this.selectedYear, this.selectedMonth, 0);
      dateFilter = {
        "endRange": endDate.toISOString(),
        "startRange": startDate.toISOString()
      }
      payload = {
        "dateFilter": dateFilter
      }
    } else if (this.selectedYear) {
      startDate = new Date(this.selectedYear, 0, 1);
      endDate = new Date(this.selectedYear, 12, 0);
      dateFilter = {
        "endRange": endDate.toISOString(),
        "startRange": startDate.toISOString()
      }
      payload = {
        "dateFilter": dateFilter
      }
    }

    if (this.selectedCategories && this.selectedCategories.length > 0) {
      payload = {
        "productCategoryIds": this.selectedCategories
      }
    }

    if (this.selectedLanguage) {
      payload = {
        "language": this.selectedLanguage
      }
    }

    this.apiService.getFilterBlog(payload, { page: this.page - 1, size: this.size, createdDate: 'desc' }).subscribe(res => {
      this.isShowShimmer = false;

      this.blogList = res.body;
      console.log(this.blogList);
      this.totalCount = parseInt(res.headers.get('X-Total-Count'));
      console.log(this.totalCount);
      this.blogList.forEach((element: any) => {
        console.log(element);
        if (element.image) {
          this.imageService.getImageContent(element.image);
          
        }
      });
    });
  }
}
