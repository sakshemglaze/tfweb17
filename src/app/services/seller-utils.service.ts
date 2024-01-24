import { Injectable } from '@angular/core';
export enum PACKAGE_STATUS {
  ACTIVE = "active",
  EXPIRED = "expired",
  UNSUBSCRIBED = "unsubscribed"
}

@Injectable({
  providedIn: 'root'
})
export class SellerUtilsService {

  constructor() { }

  getPackageNameBySeller(seller: any) {
    if (seller && seller.activePackageSubscription && seller.activePackageSubscription.servicePackage && seller.activePackageSubscription.servicePackage.packageName) {
      return seller.activePackageSubscription.servicePackage.packageName
    }
    return "Free Package"
  }

  isFreeSeller(seller: any) {
    if (this.getPackageNameBySeller(seller).toLowerCase().indexOf('free') >= 0) return true;
    return false;
  }

  getPackageStatusBySeller(seller: any) {
    let packageStatus = {};
    if (seller && seller.activePackageSubscription && seller.activePackageSubscription.subscriptionEndDate) {
      let curr_date = new Date();
      let expdate = new Date(seller.activePackageSubscription.subscriptionEndDate);
      let diff = expdate.getTime() - curr_date.getTime();
      let diffDays = Math.ceil(diff / (1000 * 3600 * 24));
      if (diffDays > 0) {
        packageStatus = {
          status: PACKAGE_STATUS.ACTIVE,
          expiryDate: expdate,
          diffDays: diffDays,
          packageName: this.getPackageNameBySeller(seller)
        }
      } else {
        packageStatus = {
          status: PACKAGE_STATUS.EXPIRED,
          expiryOn: expdate,
          diffDays: diffDays,
          packageName: this.getPackageNameBySeller(seller)
        }
      }
    } else {
      packageStatus = {
        status: PACKAGE_STATUS.UNSUBSCRIBED,
        packageName: this.getPackageNameBySeller(seller)
      }
    }
    return packageStatus;
  }

  getSellerType(seller: any) {
    let sellerPackageName = this.getPackageNameBySeller(seller);
    if (sellerPackageName.toLowerCase().indexOf('free') >= 0 || sellerPackageName.toLowerCase().indexOf('silver') >= 0 || sellerPackageName.toLowerCase().indexOf('gold') >= 0) {
      return 2;
    } else {
      return 1;
    }
  }
}
