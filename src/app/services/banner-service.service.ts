import { Injectable } from '@angular/core';
import { TRADERSFIND } from '../constants/api-constants';
import { ApiSharedService } from './api-shared.service';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class BannerServiceService {

  isMobile = false;
  isTablet = false;
  allBanners: any;
  homppageBannerNames =
    "Header Right,Header Middle,Header Left,Header,Blog Left,Latest Product Left,Popular Product Right";
  headerRight = null;
  headerCenter = null;
  headerLeft = null;
  header = null;
  topRight = null;
  productRight = null;
  productLeft = null;
  altImgText = null;
  constructor(

    private apiService: CommonService,
    private _apiSharedService: ApiSharedService
    ) { }
      
  increaseCount(id: any, type: string) {
    if (type && type == 'banner') {
      this.apiService.increaseBannerCount(id).subscribe(() => {

      });
    }
    if (type && type == 'offer') {
      this.apiService.increaseOfferCount(id).subscribe(() => {

      });
    }
  }

  redirectToUrl(url: string | URL | null | undefined) {
    if (url != null) {
      window.open(url, "_blank");
    }
  }
  getAllBannerByPageName(banners: any) {
    if (this.allBanners) {
      this.getBannerImages(banners);
    } else {
      this._apiSharedService
        .getBannerByPageName(this.homppageBannerNames)
        .subscribe((res) => {
          this.allBanners = res;
          this.getBannerImages(banners);
        });
    }
  }
  getBannerImages(banners: any) {
    for (let bannerName in this.allBanners) {
      if (banners.indexOf(bannerName) >= 0)
        this.getImageContent(this.allBanners[bannerName]);
    }
  }
  getImageContent(item: any) {
    if (item && item.image && !item.imageContent) {
      item["imageContent"] = TRADERSFIND.IMAGE_URL + item.image.id + ".webp";
      item["altImgText"] = item.webPageName;
      if (item.webPageName == "Header") {
        this.header = item;
      } else if (item.webPageName == "Blog Left") {
        this.topRight = item;
      } else if (item.webPageName == "Popular Product Right") {
        this.productRight = item;
      } else if (item.webPageName == "Latest Product Left") {
        this.productLeft = item;
      }
    }
  }
}
