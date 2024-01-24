import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor(private router: Router, 
    @Inject(PLATFORM_ID) private platformId: any) { }
  
  getProductUrl(pname: string, pid: any) {
    return this.router
      .createUrlTree([
        'product',
        //pname.trim().toLowerCase().replace(/&|\,|\s/g, '-').replace(/-+/g,"-"),
        pname.trim().toLowerCase().replace(/[^\w\s]|(\s(?=\s))/g, '').replace(/\s/g, '-'),
        pid,
      ])
      .toString();
  }

  getCategoryUrl(name: string, id: any) {
    return this.router
      .createUrlTree([
        'group-category',
        name.trim().toLowerCase().replace(/&|\,|\s/g, '-').replace(/-+/g, "-"),
        id,
      ])
      .toString();
  }

  getSubcategoryUrl(category: string, subcategory: string, id: any) {
    return category
      ? this.router
        .createUrlTree([
          'category',
          // category.trim().toLowerCase().replace(/&|\,|\s/g, '-').replace(/-+/g, "-"),
          subcategory.trim().toLowerCase().replace(/&|\,|\s/g, '-').replace(/-+/g, "-"),
          id,
        ])
        .toString()
      : '/';
  }

  getSubcategoryLocUrl(category: string, subcategory: string, loc: string, id: any) {
    return category
      ? this.router
        .createUrlTree([
          'category',
          // category.trim().toLowerCase().replace(/&|\,|\s/g, '-').replace(/-+/g, "-"),
          subcategory.trim().toLowerCase().replace(/&|\,|\s/g, '-').replace(/-+/g, "-"),
          loc.trim().toLowerCase().replace(/&|\,|\s/g, '-').replace(/-+/g, "-"), id,
        ])
        .toString()
      : '/';
  }

  getSubcategoryAllLocUrl(category: string, subcategory: string, loc: string, id: any) {
    return category
      ? this.router
        .createUrlTree([
          'category',
          // category.trim().toLowerCase().replace(/&|\,|\s/g, '-').replace(/-+/g, "-"),
          subcategory.trim().toLowerCase().replace(/&|\,|\s/g, '-').replace(/-+/g, "-"),
          id,
        ])
        .toString()
      : '/';
  }

  getSellerUrl(sellerUrl: string, id: any) {
    if (sellerUrl == 'null') { return this.router.createUrlTree (['/']) }
    return this.router
      .createUrlTree([
        'seller',
        //sellerCompanyName.trim().toLowerCase().replace(/[^\w\s]|(\s(?=\s))/g, '').replace(/\s/g, '-'),id,])
        sellerUrl == null || sellerUrl == '' ?'/':
        sellerUrl.trim().toLocaleLowerCase().replace(/&|\,|\s/g, '-').replace(/-+/g, "-"),])
      .toString();
  }

  getBlogUrl(title: string) {
    return this.router
      //.createUrlTree(['blog', title.toLowerCase().split(' ').join('-').replace(/[^\w\s]/gi, '-').replace(/-+/g,"-")])
      .createUrlTree(['blog', title.toLowerCase().replace(/[^\w\s]|(\s(?=\s))/g, '').replace(/\s/g, '-'),])
      .toString();

  }

  getProductToWhatsapp(prodName:any, id:any, seller:any, isPackage = false) {
    let sellermobile;
    let appendUrl = "";
    if (seller.sellerWhatsappNumber1) {
      sellermobile = seller.sellerWhatsappNumber1;
    }
    if (seller.sellerWhatsappNumber1 && seller.sellerWhatsappNumber2) {
      sellermobile =
        seller.sellerWhatsappNumber1 + "," + seller.sellerWhatsappNumber2;
    } else if (seller.sellerWhatsappNumber1) {
      sellermobile = seller.sellerWhatsappNumber1;
    } else if (seller.sellerWhatsappNumber2) {
      sellermobile = seller.sellerWhatsappNumber2;
    }

    if (sellermobile) {
      appendUrl = isPlatformBrowser(this.platformId)
        ? sellermobile
          ? "?id=" + window.btoa(encodeURIComponent(sellermobile))
          : ''
        : '';
    }

    let whatsappNo = "971569773623";
    if (sellermobile) whatsappNo = sellermobile;
    if (prodName != "") {
    return (
      "https://api.whatsapp.com/send?phone=" +
      whatsappNo +
      "&text=I am interested in " +
      encodeURIComponent(prodName) +
      ". https://www.tradersfind.com" + this.getProductUrl(prodName,id)
      //encodeURIComponent(prodName.trim().replace(/ /g, "-")) +
      //"/" +
      //id +
      + appendUrl
    );
    } else {
      return (
      "https://api.whatsapp.com/send?phone=" +
      whatsappNo +
      "&text=I am interested in your products!"
      + appendUrl
      );
    }
  }

  /* getProductToWhatsapp(
    prodName: any,
    id: string,
    seller: { sellerWhatsappNumber1: string; sellerWhatsappNumber2: string }
  ) {
    let sellermobile;
    let appendUrl = '';
    if (seller.sellerWhatsappNumber1) {
      sellermobile = seller.sellerWhatsappNumber1;
    }
    if (seller.sellerWhatsappNumber1 && seller.sellerWhatsappNumber2) {
      sellermobile =
        seller.sellerWhatsappNumber1 + ',' + seller.sellerWhatsappNumber2;
    } else if (seller.sellerWhatsappNumber1) {
      sellermobile = seller.sellerWhatsappNumber1;
    } else if (seller.sellerWhatsappNumber2) {
      sellermobile = seller.sellerWhatsappNumber2;
    }

     if (sellermobile) {
       appendUrl = isPlatformBrowser(this.platformId)? sellermobile? '?id=' + window.btoa(encodeURIComponent(sellermobile)): '' : '';
     }
    return (
      'https://api.whatsapp.com/send?phone=971569773623&text=I am interested in ' +
      encodeURIComponent(prodName) +
      '. https://www.tradersfind.com/product/' +
      encodeURIComponent(prodName.trim().replace(/ /g, '-')) +
      '/' +
      id +
      appendUrl
    );
  }*/

  navigateToProductUrl(pname: string, pid: any) {
    this.router.navigate([
      '/product',
      pname.trim().toLowerCase().replace(/&|\,|\s/g, '-').replace(/-+/g, "-"),
      pid,
    ]);
  }
}
