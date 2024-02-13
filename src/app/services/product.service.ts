import { Injectable } from '@angular/core';
import { SeoService } from './seo.service';
import { Seo } from '../models/seo';
import { TRADERSFIND } from '../constants/api-constants';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(
    // public authService: YpAuthService,
    // public dialog: MatDialog,
    // public loginDialogService: LoginDialogV2Service,
    private seoService: SeoService,
    // public requirementService: RequirementV2Service
  ) { }

  setSeoAttributes(product: any) {
    console.log(product);
    let seo = new Seo({
      title: product.metaTitle && product.metaTitle != '' ? product.metaTitle : product.productName + ' in ' + product.seller.state + ' - ' + product.sellerCompanyName,
      metaTitle: product.metaTitle && product.metaTitle != '' ? product.metaTitle : product.productName + ' in ' + product.seller.state + ' - ' + product.sellerCompanyName,
      metaDescription: product.metaDescription && product.metaDescription != '' ? product.metaDescription : product.sellerCompanyName + ' - Offering ' + product.productName + ' in '
      + product.seller.state + '. Get the best quality at the best price.',
      metaKeywords: product.metaKeywords && product.metaKeywords != '' ? product.metaKeywords.join(',') : product.productName + ', ' + product.productName + ' in ' + product.seller.state + product.productName + ' in UAE',
      fbTitle: product.fbTitle && product.fbTitle != '' ? product.fbTitle : product.productName,
      fbDescription: product.fbDescription && product.fbDescription != '' ? product.fbDescription : product.productDescription,
      fbImage: product.fbImage ? TRADERSFIND.BASE_URL + 'api/guest/imageContentDownload/' + product.fbImage.id : undefined,
      fbUrl: product.fbUrl && product.fbUrl != '' ? product.fbUrl : null,
      twitterTitle: product.twitterTitle && product.twitterTitle != '' ? product.twitterTitle : product.productName,
      twitterDescription: product.twitterDescription && product.twitterDescription != '' ? product.twitterDescription : product.productDescription,
      twitterImage: product.twitterImage ? TRADERSFIND.BASE_URL + 'api/guest/imageContentDownload/' + product.twitterImage.id : undefined,
      twitterSite: product.twitterSite && product.twitterSite != '' ? product.twitterSite : null,
      twitterCard: product.twitterCard && product.twitterCard != '' ? product.twitterCard : null
    })
    this.seoService.setSeoAttributes(seo);
  }
}
