import { Injectable } from '@angular/core';
import { TRADERSFIND } from '../constants/api-constants';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class MaskingService {
  constructor(private apiService: CommonService,
    //private authService: YpAuthService,
    //private loginDialogService: LoginDialogV2Service
  ) { }

  onClickPhoneNum(seller: any, toBeMasked: any, url: any, product: any) {
    // if(this.authService.userType){
    if (seller.maskedClicked) {
      window.open('tel:' + seller[toBeMasked], '_blank')
    } else {
      seller.maskedClicked = true
      this.apiService.increaseSellerNumClicks(seller.id).subscribe(res => { });
      let messageText = ''
      if (product) {
        messageText = "Thank you for showing interest. Product link -  " + (url ? TRADERSFIND.WEBSITE_URL + url : "URL Unavailable");
      } else {
        messageText = "Thank you for showing interest. Seller link -  " + (url ? TRADERSFIND.WEBSITE_URL + url : "URL Unavailable");
      }
      let payload = {
        "createdDate": new Date(),
        "ipAddress": '', // this.authService.ipAddress ? this.authService.ipAddress : "NA",
        "messageText": messageText,
        "url": '', //url ? environment.websiteUrl + url : "URL Unavailable",
        "user": '', //this.authService.userId ? { id: this.authService.userId } : null,
        "seller": { id: seller.id },
        "product": product ? { id: product.id } : null,
        "productsCategory": product && product.productsCategory && product.productsCategory.id ? { id: product.productsCategory.id } : null,
        "productsSubcategory": product && product.productsSubcategory && product.productsSubcategory.id ? { id: product.productsSubcategory.id } : null
      }
      this.apiService.postLeadCapture(payload).subscribe(res => { });
    }
  }
  // else{
  //   this.loginDialogService.openLoginDialog('Buyer');
  // }  
  // }

  getMaskedNumber(seller: any, toBeMasked: any) {
    var first2 = seller[toBeMasked].substring(0, 4);
    var last2 = seller[toBeMasked].substring(seller[toBeMasked].length - 2);
    var mask = seller[toBeMasked].substring(4, seller[toBeMasked].length - 2).replace(/\d/g, "*");
    seller['maskedNum'] = first2 + mask + last2
    return seller.maskedClicked ? seller[toBeMasked] : '+971 Click To View';
  }


}
