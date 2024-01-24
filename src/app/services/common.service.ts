import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginObserver } from './LoginObserver';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  baseurl = 'https://api.tradersfind.com/';

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      // 'Access-Control-Allow-Origin': '*',
      // 'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
      // 'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With'
    }),
  };

  constructor(
    private httpClient: HttpClient,
    //private storageService: StorageService
  ) { }

  getIPAddress(): Observable<any> {
    return this.httpClient.get("https://api.ipify.org/?format=json");
  }

  public forgotPassword(data: any): Observable<LoginObserver> {
    // return this.httpClient.post<SellerRegistration>(this.baseurl + 'api/register', JSON.stringify(data), this.httpOptions)

    return this.httpClient
      .post<LoginObserver>(
        this.baseurl + "api/account/reset-password/init",
        data,
        this.httpOptions
      )
      .pipe

      // catchError(this.handleError)
      ();
  }

  public activateAccount(value: any): Observable<any> {
    return this.httpClient
      .get<LoginObserver>(
        this.baseurl + "api/activate?key=" + value,
        this.httpOptions
      )
      .pipe
      //
      // catchError(this.handleError)
      ();
  }

  public contactUsPost(data: any): Observable<any> {
    return this.httpClient
      .post<any>(
        this.baseurl + "api/help-desks",
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe();
  }
  public resetPassword(data: any): Observable<LoginObserver> {
    // return this.httpClient.post<SellerRegistration>(this.baseurl + 'api/register', JSON.stringify(data), this.httpOptions)
    //
    return this.httpClient
      .post<LoginObserver>(
        this.baseurl + "api/account/reset-password/finish",
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe

      // catchError(this.handleError)
      ();
  }

  public increaseBannerCount(id: string): Observable<any> {
    var headers = new HttpHeaders()
      .set(
        "Authorization",
        "Bearer " + '' //this.storageService.getItem("userAccessToken")
      )
      .set("Content-Type", "application/json");
    return this.httpClient
      .get<any>(this.baseurl + "api/guest/banners-set-click-count/" + id, {
        headers: headers,
      })
      .pipe();
  }

  public increaseOfferCount(id: string): Observable<any> {
    var headers = new HttpHeaders()
      .set(
        "Authorization",
        "Bearer " + '' //this.storageService.getItem("userAccessToken")
      )
      .set("Content-Type", "application/json");
    return this.httpClient
      .get<any>(this.baseurl + "api/guest/offers-set-click-count/" + id, {
        headers: headers,
      })
      .pipe();
  }

  public getAllProductCategories(catId: string): Observable<any> {
    if (catId == "all") {
      return this.httpClient
        .get<LoginObserver>(
          this.baseurl +
          "api/guest/products-categories?size=200&sort=categoryName",
          this.httpOptions
        )
        .pipe

        // catchError(this.handleError)
        ();
    } else {
      return this.httpClient
        .get<LoginObserver>(
          this.baseurl +
          "api/guest/products-categories/" +
          catId +
          "?size=200&sort=categoryName",
          this.httpOptions
        )
        .pipe

        // catchError(this.handleError)
        ();
    }
  }

  public processTransaction(transactionId: string, authToken: string): Observable<any> {
    var headersForEnquiriesAPI = new HttpHeaders()
      .set("Authorization", "Bearer " + authToken)
      .set("Content-Type", "application/json");
    return this.httpClient
      .post<any>(
        this.baseurl + "api/process-transaction/" + transactionId,
        {},
        { headers: headersForEnquiriesAPI }
      )
      .pipe

      // catchError(this.handleError)
      ();
  }

  public increaseSellerNumClicks(userId: string): Observable<any> {
    return this.httpClient
      .get<any>(this.baseurl + "api/guest/number-click-count/" + userId, {
        headers: new HttpHeaders().set("Content-Type", "application/json"),
      })
      .pipe

      // catchError(this.handleError)
      ();
  }

  public postLeadCapture(data: any): Observable<LoginObserver> {
    // let authToken = this.storageService.getItem('userAccessToken')
    var headersForEnquiriesAPI = new HttpHeaders().set(
      "Content-Type",
      "application/json"
    );
    return this.httpClient
      .post<LoginObserver>(
        this.baseurl + "api/guest/lead-captures",
        JSON.stringify(data),
        { headers: headersForEnquiriesAPI }
      )
      .pipe

      // catchError(this.handleError)
      ();
  }

  public getRelatedProduct(prdId: string): Observable<any> {
    return this.httpClient
      .get<LoginObserver>(
        this.baseurl + "api/related-products/" + prdId + "?size=10",
        this.httpOptions
      )
      .pipe

      // catchError(this.handleError)
      ();
  }

  public getImageContent(Id: string): Observable<any> {
    return this.httpClient
      .get<LoginObserver>(this.baseurl + "api/images/" + Id, this.httpOptions)
      .pipe

      // catchError(this.handleError)
      ();
  }

  public getCountries(): Observable<any> {
    return this.httpClient.get("assets/testingJson/countries_v4.json");
  }

  public getQuantityUnits(): Observable<any> {
    return this.httpClient.get("assets/testingJson/quantity_units.json");
  }
}
