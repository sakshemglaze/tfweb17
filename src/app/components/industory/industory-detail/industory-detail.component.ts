import { AfterViewInit, Component, ElementRef, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiSharedService } from '../../../services/api-shared.service';
import { ImageService } from '../../../services/image.service';
import { PostRequirementServiceService } from '../../../services/post-requirement-service.service';
import { SeoService } from '../../../services/seo.service';
import { UrlService } from '../../../services/url.service';
import { CommonModule } from '@angular/common';
import { OtpComponent } from '../../dialog/otp/otp.component';
import { LoadpComponent } from '../../shared/loadp/loadp.component';
import { HeaderSubComponent } from '../../header-sub/header-sub.component';
import { BannerAdvComponent } from '../../shared/banner-adv/banner-adv.component';
import { TradersImgComponent } from '../../shared/traders-img/traders-img.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-industory-detail',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,OtpComponent,LoadpComponent, HeaderSubComponent, TradersImgComponent,// NgxPaginationModule,
  BannerAdvComponent],
  providers:[PostRequirementServiceService,MessageService],
  templateUrl: './industory-detail.component.html',
  styleUrl: './industory-detail.component.css'
})
export class IndustoryDetailComponent implements AfterViewInit {


  all_categories: any[] = [];
  industryId: any;
  industryName: any;
  industryDetails: any;
  categorySize = 12;

  constructor(
    private _apiSharedService: ApiSharedService,
    private route: ActivatedRoute,
    private imageService: ImageService,
    private _urlservice: UrlService,
    private seoService:SeoService,
    public requirementService: PostRequirementServiceService,
    private renderer: Renderer2, private el: ElementRef
  ) { }
  ngOnInit(): void {
    this.requirementService.initializeRequirementForm();
    this.industryId = this.route.snapshot.paramMap.get('industryid');
    this.industryName = this.route.snapshot.paramMap.get('industryname');
    if (this.industryName) {
      this.industryName = this.route.snapshot.paramMap.get('industryName')?.split('-').join(' ');
    }
    if (this.industryId) {
      this.geAllIndustries();
    }
  }
  ngAfterViewInit() {
   // Remove the CSS class to display the content on the client side
  const hiddenContent = document.querySelector('.hidden-content');
   if (hiddenContent) {
    hiddenContent.classList.remove('hidden-content');
  }
  }

  geAllIndustries() {
    this._apiSharedService
      .getIndustryById(this.industryId, {
        size: 200,
        sort: 'industryName'
      })
      .subscribe((res) => {
        this.industryDetails = res;
        console.log(res);
          if(res.metaTitle && res.metaTitle != null) {
          this.seoService.setIndustrySeo(res);
        }
      });
  }
  getUrl(id: any, name: any) {
    return this._urlservice.getCategoryUrl(name,id);
  }
  getSubCatUrl(id: any, catname: any, name: any) {
    //return '/subcategory/' + catname.toLowerCase().replace(/[ ,]/g, "-") + '/' + name.toLowerCase().replace(/[ ,]/g, "-") + '/' + id;
    return this._urlservice.getSubcategoryUrl(catname,name,id);

  }
  findActive(items: any) {
    return items.filter(
      (obj: any) =>
        obj.id !== '' && obj.categoryName !== '' && obj.status != 'false'
    );
  }
  
}
