import { Component, Inject, Input, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { PostRequirementComponent } from '../../dialog/post-requirement/post-requirement.component';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiSharedService } from '../../../services/api-shared.service';
import { MaskingService } from '../../../services/masking.service';
import { PostRequirementServiceService } from '../../../services/post-requirement-service.service';
import { UrlService } from '../../../services/url.service';
import { TradersImgComponent } from '../../shared/traders-img/traders-img.component';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-more-products',
  standalone: true,
  imports: [CommonModule,TradersImgComponent],
  providers:[PostRequirementServiceService,MessageService],
  templateUrl: './more-products.component.html',
  styleUrl: './more-products.component.css'
})
export class MoreProductsComponent {
  @Input() productId: any;
  @Input() seller: any;
  products: any;
  constructor(
    private apiSharedV2Service: ApiSharedService,
    private router: Router,
    public maskingService: MaskingService,
    public urlService: UrlService,
    public modalS:NgbModal,
    public requirementService: PostRequirementServiceService,
    @Inject(PLATFORM_ID) private platformId: any
  ) { }

  ngOnInit() {
    if (this.productId && isPlatformBrowser(this.platformId)) {
      this.apiSharedV2Service
        .getRelatedProductsByProductId(this.productId, { page: 0, size: 6 })
        .subscribe(
          (res: { body: { products: any; }; }) => {
            this.products = res.body.products;
            this.products = this.products.length > 4 ? this.products.slice(0, 4) : this.products;
          },
          (error: any) => {

          }
        );
    }
  }

  navigateUrl(pname: string, pid: string) {
    this.router.navigateByUrl(
      "/product/" + pname.replace(/ /g, "-") + "/" + pid
    );
  }
  
  openPostRequirement(productNm:String) {
    const modalRef = this.modalS.open(PostRequirementComponent, { size: 'lg', centered: true })
    modalRef.componentInstance.product = productNm;
  }

}
