import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { ApiService } from '../api.service';
import { IMAGE, CATEGORY, PRODUCT, OFFER, BLOG, BANNER, INDUSTRY, SELLER, SEARCH, PACKAGES, BUYER, ENQUIRY, LOGIN, KEYWORD, USER, LEAD, JOBS, BUSINESS, DOCUMENTS, SALES, BLINDKEYWORDS } from '../constants/api-constants';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class ApiSharedService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  sellerId: any;
  constructor(
    private _apiService: ApiService,
    private storageService: StorageService,
    private httpClient: HttpClient
  ) {
    this.sellerId = this.storageService.getItem(StorageService.USER_ID);
  }

  public readFileAsync(file: any): Promise<any> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        resolve(reader);
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  public getImageContent(id: any): Observable<any> {
    return this._apiService.get(IMAGE.IMAGE + id, false);
  }

  public getPopularCategories(size: any): Observable<any> {
    return this._apiService.get(
      CATEGORY.FEATURED_CATEGORIES + '?size=' + size,
      false
    );
  }

  public getPopularProducts(size: any): Observable<any> {
    return this._apiService.get(
      PRODUCT.POPULAR_PRODUCTS + '?size=' + size,
      false
    );
  }

  public getLatestProducts(size: any): Observable<any> {
    return this._apiService.get(
      PRODUCT.LATEST_PRODUCTS + '?size=' + size,
      false
    );
  }

  public getLatestOffers(page: any, size: any): Observable<any> {
    return this._apiService.get(
      OFFER.LATEST_OFFERS + '?page=' + page + '&size=' + size,
      false
    );
  }

  public getBlog(page: any, size: any): Observable<any> {
    return this._apiService.get(
      BLOG.GUEST + '?page=' + page + '&size=' + size,
      true
    );
  }

  public getBlogByID(id: any): Observable<any> {
    return this._apiService.get(BLOG.GUEST + '/' + id, false);
  }

  public getBlogByTitle(queryParams: any): Observable<any> {
    return this._apiService.get(BLOG.GUEST_BY_TITLE, false, queryParams);
  }

  public getAllBlogs(): Observable<any> {
    return this._apiService.get(BLOG.GUEST, false);
  }

  public getFeaturedBlogs(): Observable<any> {
    return this._apiService.get(BLOG.GUEST_FEATURED, false, {
      page: 0,
      size: 6,
    });
  }

  public getAllGuestBanners(): Observable<any> {
    return this._apiService.get(BANNER.GUEST, false);
  }

  public getAllProductCategories(page: any, size: any): Observable<any> {
    return this._apiService.get(CATEGORY.GUEST, false, {
      page: page,
      size: size,
    });
  }

  public getAllProductCategoriesIdName(page: any, size: any): Observable<any> {
    return this._apiService.get(CATEGORY.MIN, false, {
      page: page,
      size: size,
    });
  }

  public getAllProductCategoriesOnDemand(payload: any): Observable<any> {
    return this._apiService.post(CATEGORY.ALL_CATEGORIES_ON_DEMAND, payload);
  }

  public getBlogCategories(): Observable<any> {
    return this._apiService.get(BLOG.CATEGORIES, true);
  }

  public getLatestBlog(queryParams: any): Observable<any> {
    return this._apiService.get(BLOG.GUEST, false, queryParams);
  }

  public getFilterBlog(payload: any, queryParams: any): Observable<any> {
    if (payload.productCategoryIds && payload.productCategoryIds.length > 0) {
      queryParams.categoryIds = payload.productCategoryIds.join(',');
    }
    if (payload.selectedLanguage && payload.selectedLanguage.trim() != '') {
      queryParams.language = payload.selectedLanguage.trim();
    }
    if (
      payload.dateFilter &&
      payload.dateFilter.startRange &&
      payload.dateFilter.startRange != ''
    ) {
      queryParams.startDate = payload.dateFilter.startRange;
    }
    if (
      payload.dateFilter &&
      payload.dateFilter.endRange &&
      payload.dateFilter.endRange != ''
    ) {
      queryParams.endDate = payload.dateFilter.endRange;
    }
    return this._apiService.get(BLOG.FILTER, true, queryParams);
  }

  public getAllFeaturedProductCategories(queryparams: any): Observable<any> {
    return this._apiService.get(
      CATEGORY.FEATURED_PRDUCT_CATEGORIES,
      false,
      queryparams
    );
  }

  public getProductDetails(prodId: any, userId: any,userName:any): Observable<any> {
    let token = this.storageService.getItem(StorageService.USER_ACCESS_TOKEN);
    if (userId && token) {
      return this._apiService.get<any>(
        PRODUCT.PRODUCT + '/' + prodId,
        false,
        { userId: userId },
        true
      );
    } else {
      console.log("else")
      return this._apiService.get<any>(
        PRODUCT.PRODUCT_GUEST_DETAILS + prodId +'/'+userName,
        false,
        null,
        false
      );
    }
  }

  public getPopularProductCategories(size: any): Observable<any> {
    return this._apiService.get(
      CATEGORY.POPULAR_CATEGORIES + '?size=' + size + '&sort=hitCount,desc',
      false
    );
  }

  public getIndustries(size: any, page: any): Observable<any> {
    return this._apiService.get(
      INDUSTRY.ALL_INDUSTRIES + '?size=' + size + '&page=' + (page - 1) + '&sort=industryName,asc',
      true
    );
  }

  public getIndustryById(id: any, queryparams: any): Observable<any> {
    return this._apiService.get(INDUSTRY.ALL_INDUSTRIES + '/' + id, false, queryparams);
  }
  public getIndustryByIdNa(id:any,queryparams:any){
    return this._apiService.get("api/industries-na"+'/'+id, false,queryparams);
  }
  

  public getAllCategories(size: any, sortby: any): Observable<any> {
    return this._apiService.get(
      CATEGORY.ALL_CATEGORIES + '?size=' + size + '&sort=' + sortby,
      false
    );
  }
  
  public getCategoryById(id: any, queryparams: any): Observable<any> {
    return this._apiService.get(CATEGORY.GUEST + '/' + id, false, queryparams);
  }

  public getCategoryByIdNa(id: any, queryparams: any): Observable<any> {
    return this._apiService.get('api/guest/products-categories-na' + '/' + id, false, queryparams);
  }

  public getUserByLogin(_force?: any, loginId?: any): Observable<any> {
    let login = null;
    if (loginId) {
      login = loginId;
    } else {
      login = this.storageService.getItem(StorageService.LOGIN);
    }
    if (login)
      return this._apiService.get(
        SELLER.BY_LOGIN + '/' + login,
        false,
        null,
        true
      );
    else { return of({}) };


  }

  public getUserStats(): Observable<any> {
    let sellerId = this.storageService.getItem(StorageService.USER_ID);
    return this._apiService.get(SELLER.STATS + sellerId, false, null, true);
  }

  public updateSellerData(data: any): Observable<any> {
    return this._apiService.put(SELLER.PARTIAL_UPDATE, data, false, null, true);
  }

  public getSellerRequirements(size: any, sort: any): Observable<any> {
    let sellerId = this.storageService.getItem(StorageService.USER_ID);
    return this._apiService.get(
      SELLER.REQUIRMENTS + sellerId + '?size=' + size + '&sort=' + sort,
      false,
      null,
      true
    );
  }

  public getSellerRequirementsList(
    sort: any,
    page: any,
    size: any
  ): Observable<any> {
    let sellerId = this.storageService.getItem(StorageService.USER_ID);
    return this._apiService.get(
      SELLER.REQUIRMENTS +
      sellerId +
      '?size=' +
      size +
      '&sort=' +
      sort +
      '&page=' +
      page,
      true,
      null,
      true
    );
  }

  public getSellerEnquiriesList(
    page: any,
    size: any,
    sort: any
  ): Observable<any> {
    let sellerId = this.storageService.getItem(StorageService.USER_ID);
    return this._apiService.get(
      SELLER.ENQUIRIES +
      sellerId +
      '?size=' +
      size +
      '&sort=' +
      sort +
      '&page=' +
      page,
      true,
      null,
      true
    );
  }

  public getSellerProductsAllNew(page: any, size: any): Observable<any> {
    let sellerId = this.storageService.getItem(StorageService.USER_ID);
    return this._apiService.get(
      SELLER.PRODUCTS_SERVICES + sellerId + '?page=' + page + '&size=' + size,
      false,
      null,
      true
    );
  }

  public getSellerProductsAllNewList(
    page: any,
    size: any,
    isFeatured: any,
    searchText: any,
    sort: any
  ): Observable<any> {
    let sellerId = this.storageService.getItem(StorageService.USER_ID);
    return this._apiService.get(
      SELLER.PRODUCTS_SERVICES +
      sellerId +
      '?page=' +
      page +
      '&size=' +
      size +
      (isFeatured ? '&isFeatured=' + isFeatured : '') +
      (searchText ? '&searchText=' + searchText : '') +
      '&sort=' +
      sort,
      true,
      null,
      true
    );
  }

  public addImage(data: any): Observable<any> {
    return this._apiService.post(
      IMAGE.IMAGE,
      JSON.stringify(data),
      false,
      null,
      true
    );
  }

  public addProduct(data: any): Observable<any> {
    return this._apiService.post(PRODUCT.PRODUCT, data, true, null, true);
  }

  public getSearchData(searchText: any): Observable<any> {
    return this._apiService.get(
      SEARCH.BY_SEARCH + '?searchText=' + encodeURIComponent(searchText),
      true,
      null,
      false
    );
  }

  public updateProduct(data: any): Observable<any> {
    return this._apiService.put(
      PRODUCT.PRODUCT_DETAILS,
      data,
      false,
      null,
      true
    );
  }

  public getPackages(): Observable<any> {
    return this._apiService.get(PACKAGES.SERVICE_PACKAGES, true, null, true);
  }

  public getBuyerEnquiries(queryParams: any): Observable<any> {
    let userId = this.storageService.getItem(StorageService.USER_ID);
    return this._apiService.get(
      BUYER.ENQUIRIES + userId,
      true,
      queryParams,
      true
    );
  }

  public searchProducts(payload: any, queryParams: any): Observable<any> {
    return this._apiService.post(
      SEARCH.PRODUCTS,
      payload,
      true,
      queryParams,
      false
    );
  }

  public searchPackageProducts(
    payload: any,
    queryParams: any
  ): Observable<any> {
    return this._apiService.post(
      SEARCH.PACKAGE_PRODUCTS,
      payload,
      false,
      queryParams,
      false
    );
  }

  public postEnquiries(fielddata: any): Observable<any> {
    return this._apiService.post(
      ENQUIRY.COMPANY_ENQUIRY,
      fielddata,
      true,
      null,
      true
    );
  }

  public saveOffers(payload: any): Observable<any> {
    return this._apiService.post(SELLER.OFFER, payload, true, null, true);
  }

  public getUnits(): Observable<any> {
    return this.httpClient.get('assets/testingJson/Units.json');
  }

  public getCountryCodes(): Observable<any> {
    return this.httpClient.get('assets/testingJson/country_codes_v1.json');
  }

  public postRequirements(fielddata: any): Observable<any> {
    return this._apiService.post(PRODUCT.ENQUIRE, fielddata, true, null, true);
  }

  public sendOtp(phone: any, isWhatsapp: any): Observable<any> {
    //console.log("api - otp " + isWhatsapp + "  phone : " + phone); 
    let payload = { phone: phone, loginmethod:isWhatsapp };
    //console.log("api shared " + payload.loginmethod);
    return this._apiService.post(
      LOGIN.SEND_OTP,
      payload,
      false,
      //isWhatsapp ? { type: 'whatsapp' } : {type: 'email'},
      {type: isWhatsapp},
      false
    );
  }

  public checkUserExists(login: any): Observable<any> {
   // console.log(login);
    return this._apiService.get(
      LOGIN.USER_EXISTS + login,
      false,
      null,
      false,
      'text'
    );
  }

  public otpLogin(data: any): Observable<any> {
   // console.log("otpLogin -- ");
    return this._apiService.post(LOGIN.AUTHENTICATE_OTP, data);
  }

  public otpRegister(data: any): Observable<any> {
    return this._apiService.post(LOGIN.OTP_REGISTER, data);
  }

  public getKeywordByName(keyword: any): Observable<any> {
    return this._apiService.get(KEYWORD.BY_NAME, false, {
      searchText: keyword,
    });
  }

  public getSubcategoryById(id: any): Observable<any> {
    return this._apiService.get(SEARCH.SUBCATEGORY_BY_ID + id);
  }

  public sendLoginHistory(payload: any) {
    return this._apiService.post(LOGIN.HISTORY, payload, false, null, true);
  }

  public postUserData(fielddata: any): Observable<any> {
    return this._apiService.put(
      SELLER.USER_PARTIAL_UPDATE,
      fielddata,
      false,
      null,
      true
    );
  }

  public changePassword(fielddata: any): Observable<any> {
    return this._apiService.post(
      USER.CHANGE_PASSWORD,
      fielddata,
      true,
      null,
      true
    );
  }

  public forgotPassword(data: any): Observable<any> {
    return this._apiService.post(USER.FORGOT_PASSWORD, data, true, null, true);
  }

  public getBuyerRequiments(
    buyerId: any,
    sort: any,
    page: any,
    size: any
  ): Observable<any> {
    return this._apiService.get(
      BUYER.REQUIRMENTS +
      buyerId +
      '?sort=' +
      sort +
      '&page=' +
      page +
      '&size=' +
      size,
      true,
      null,
      true
    );
  }

  public getApprovedProductsBySeller(
    sellerId: any,
    queryParams: any
  ): Observable<any> {
    return this._apiService.get(
      PRODUCT.APPROVED_PRODUCTS_BY_SELLER + sellerId,
      false,
      queryParams
    );
  }

  public getRelatedProductsByProductId(
    productId: any,
    queryparams: any
  ): Observable<any> {
    return this._apiService.get(
      PRODUCT.RELATED_PRODUCTS_BY_PRODUCT_ID + productId,
      true,
      queryparams
    );
  }

  public socialLogin(data: any): Observable<any> {
    return this._apiService.post(LOGIN.AUTHENTICATE_SOCIAL, data);
  }

  public userLogin(data: any): Observable<any> {
    return this._apiService.post(LOGIN.AUTHENTICATE, data);
  }

  public socialReg(data: any): Observable<any> {
    return this._apiService.post(LOGIN.REGISTER_SOCIAL, data);
  }

  public searchLeads(payload: any, queryParams: any): Observable<any> {
    return this._apiService.post(
      LEAD.BY_SEARCH,
      payload,
      true,
      queryParams,
      true
    );
  }

  public viewLeadDetails(payload: any): Observable<any> {
    return this._apiService.post(
      LEAD.ADD_ENQUIRY,
      payload,
      false,
      null,
      true,
      'text'
    );
  }

  public registration(payload: any): Observable<any> {
    return this._apiService.post(
      USER.REGISTER,
      payload,
      false,
      null,
      true,
      'text'
    );
  }

  public getJobList(queryParams: any): Observable<any> {
    return this._apiService.get(JOBS.JOB_PORTAL, true, queryParams, true, null);
  }

  public addJob(payload: any): Observable<any> {
    return this._apiService.post(
      JOBS.JOB_PORTAL,
      payload,
      false,
      null,
      true,
      'text'
    );
  }
  public updateJob(fielddata: any): Observable<any> {
    return this._apiService.put(JOBS.JOB_PORTAL, fielddata, false, null, true);
  }
  public getBannerByPageName(payload: any): Observable<any> {
    return this._apiService.get(
      BANNER.GET_BANNER_BY_PAGE_NAME,
      false,
      { webPageNames: payload },
      false
    );
  }

  public getAllHeaderBanner(): Observable<any> {
    return this._apiService.get(
      BANNER.GET_ALL_BANNER,
      false,
      //{ webPageNames: payload },
      false
    );
  }

  public getBannerByKeyword(payload: any,webpagemane: string): Observable<any> {
    const data=[payload,webpagemane]
   // console.log(data)
    return this._apiService.post(BANNER.BANNER_BY_KEYWORD, data);
  }

  public getSellerByCompanyName(companyName: any): Observable<any> {
    console.log(SELLER.BY_COMPANY_NAME + companyName);
    return this._apiService.get(SELLER.BY_COMPANY_NAME + companyName);
  }

  public getTempSeller(): Observable<any> {
    let userId = this.storageService.getItem(StorageService.USER_ID);
    return this._apiService.get(SELLER.TEMP_SELLER + userId, false, null, true);
  }

  public getFeaturedProductsBySeller(sellerId: any): Observable<any> {
    return this._apiService.get(PRODUCT.FEATURED_PRODUCTS_BY_SELLER + sellerId);
  }

  public getJobDetails(id: any): Observable<any> {
    return this._apiService.get(
      JOBS.GUEST_JOB_PORTAL + '/' + id,
      false,
      null,
      true,
      null
    );
  }

  public filterJobs(payload: any, queryParams: any): Observable<any> {
    if (payload.jobCategories && payload.jobCategories.length > 0) {
      queryParams.categoryIds = payload.jobCategories.join(',');
    }
    if (payload.searchText && payload.searchText.trim() != '') {
      queryParams.searchText = payload.searchText.trim();
    }
    return this._apiService.get(JOBS.FILTER_JOB, true, queryParams);
  }

  public claimBusiness(payload: any): Observable<any> {
    return this._apiService.post(
      BUSINESS.CLAIM,
      payload,
      false,
      null,
      false,
      null
    );
  }

  public applyJobs(payload: any): Observable<any> {
    return this._apiService.post(JOBS.APPLY_JOB, payload, true, null, true);
  }

  public getSellerJobs(id: any, queryParams: any): Observable<any> {
    return this._apiService.get(
      JOBS.SELLER_JOB + '/' + id,
      true,
      queryParams,
      true,
      null
    );
  }

  public getBuyerJobs(queryParams: any): Observable<any> {
    let userId = this.storageService.getItem(StorageService.USER_ID);
    return this._apiService.get(
      JOBS.BUYER_JOB + '/' + userId,
      true,
      queryParams,
      true,
      null
    );
  }

  public addDocument(payload: any): Observable<any> {
    return this._apiService.post(DOCUMENTS.ADD, payload, false, null, true);
  }

  public getBrowsingHistory(id: any, queryParams: any): Observable<any> {
    return this._apiService.get(
      LOGIN.BROWSING_HISTORY + '/' + id,
      true,
      queryParams,
      true,
      null
    );
  }

  public getProductHistory(id: any, queryParams: any): Observable<any> {
    return this._apiService.get(
      LOGIN.PRODUCT_HISTORY + '/' + id,
      true,
      queryParams,
      true,
      null
    );
  }

  public createPaymentTransaction(packageId: any, data: any): Observable<any> {
    let userId = this.storageService.getItem(StorageService.USER_ID);
    return this._apiService.post(
      'api/create-payment-transaction/' + userId + '?packageId=' + packageId,
      JSON.stringify(data),
      false,
      null,
      true
    );
  }

  public getPackagesById(id: any): Observable<any> {
    return this._apiService.get(
      PACKAGES.SERVICE_PACKAGES + '/' + id,
      false,
      null,
      true
    );
  }
  public getJobApplicantsByJobId(
    id: any,
    payload: any,
    queryParams: any
  ): Observable<any> {
    return this._apiService.post(
      JOBS.JOB_APPLICANTS_BY_JOBID + '/' + id,
      payload,
      true,
      queryParams,
      true,
      null
    );
  }

  public getSalesOrderBySeller(): Observable<any> {
    let userId = this.storageService.getItem('userId');
    return this._apiService.get(
      SALES.ORDER + '/' + userId,
      false,
      null,
      true,
      null
    );
  }

  public getJobCategory(queryParams: any): Observable<any> {
    return this._apiService.get(
      JOBS.JOB_CATEGORIES,
      false,
      queryParams,
      true,
      null
    );
  }

  public deleteJob(id: any): Observable<any> {
    return this._apiService.delete(
      JOBS.JOB_PORTAL + '/' + id,
      false,
      null,
      true
    );
  }

  public getDocumentConent(id: any): Observable<any> {
    return this._apiService.get(
      DOCUMENTS.ADD + '/' + id,
      false,
      false,
      true,
      null
    );
  }

  public verifyEmail(key: any): Observable<any> {
    return this._apiService.get(
      USER.EMAIL_VERIFICATION,
      false,
      { key: key },
      true,
      null
    );
  }

  public postBlindKeyword(fielddata: any): Observable<any> {
    return this._apiService.post(
      BLINDKEYWORDS.BLIND_KEYWORD,
      fielddata,
      true,
      null,
      true
    );
  }

  public getBlindKeywordByName(keyword: any): Observable<any> {
    return this._apiService.get(BLINDKEYWORDS.BY_NAME, false, {
      searchText: keyword,
    });
  }

  public updateKeywordResultCount(fielddata: any): Observable<any> {
    return this._apiService.put(
      KEYWORD.UPDATE_KEYWORD,
      fielddata,
      true,
      null,
      true
    );
  }
}
