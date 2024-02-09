import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { StorageService } from './services/storage.service';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

 baseurl = 'https://api.tradersfind.com/';
  //baseurl = 'http://94.100.26.172:8080/';

 // baseurl = 'http://localhost:8080/';

  smsurl = "http://mshastra.com/sendurl.aspx?user=20093656&pwd=uurgir&senderid=MBISMS&Countrycode=All";

  constructor(private http: HttpClient, private storageService: StorageService) { }

  getIPAddress(): Observable<any> {
    return this.http.get("https://api.ipify.org/?format=json");
  }

  get<T>(
    url: string,
    observeResponseFlag: boolean = false,
    queryParams: any = null,
    authRequired: boolean = false,
    responseType: any = null
  ): Observable<any> {
    const token = this.storageService.getItem("userAccessToken");

    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        "Access-Control-Expose-Headers": "error"
      }),
      params: new HttpParams(),
    };
    if (authRequired) {
      httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        }),
        params: new HttpParams(),
      };
    }
    // if (observeResponseFlag) {
    //   // httpOptions.observe = 'response';
    //   //{...httpOptions}

    // }
    if (queryParams) {
      httpOptions.params = queryParams;
    }
    // if (responseType) {
    //   //httpOptions['responseType'] = responseType;
    // }

    const options = { ...httpOptions, ...(observeResponseFlag && { observe: 'response' }), ...(responseType && { responseType: responseType }) };
    return this.http.get<T>(this.baseurl + url, options);
  }



  post<T, R>(
    url: string,
    request: T,
    observeResponseFlag: boolean = false,
    queryParams: any = null,
    authRequired: boolean = false,
    responseType: any = null
  ): Observable<any> {
    const token = this.storageService.getItem("userAccessToken");
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      params: new HttpParams(),
    };
    if (authRequired) {
      httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        }),
        params: new HttpParams(),
      };
    }

    // if (observeResponseFlag) {
    //   httpOptions['observe'] = 'response';
    // }
    if (queryParams) {
      httpOptions.params = queryParams;
    }
    // if (responseType) {
    //   httpOptions['responseType'] = responseType;
    // }
    const options = { ...httpOptions, ...(observeResponseFlag && { observe: 'response' }), ...(responseType && { responseType: responseType }) };
    return this.http.post<R>(this.baseurl + url, request, options);
  }

  put<T, R>(
    url: string,
    request: T,
    observeResponseFlag: boolean,
    queryParams?: any,
    authRequired: boolean = false
  ): Observable<R> {
    const token = this.storageService.getItem("userAccessToken");
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      params: new HttpParams(),
    };
    if (authRequired) {
      httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        }),
        params: new HttpParams(),
      };
    }

    // if (observeResponseFlag) {
    //   httpOptions['observe'] = 'response';
    // }
    if (queryParams) {
      httpOptions.params = queryParams;
    }
    return this.http.put<R>(this.baseurl + url, request, httpOptions);
  }

  delete<T>(
    url: string,
    observeResponseFlag: boolean = false,
    queryParams: any = null,
    authRequired: boolean = false
  ): Observable<T> {
    const token = this.storageService.getItem("userAccessToken");
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      params: new HttpParams(),
    };
    if (authRequired) {
      httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        }),
        params: new HttpParams(),
      };
    }
    // if (observeResponseFlag) {
    //   httpOptions['observe'] = 'response';
    // }
    if (queryParams) {
      httpOptions.params = queryParams;
    }

    return this.http.delete<T>(this.baseurl + url, httpOptions);
  }

//   public getUserByPhoneNO(num:string){
//     return this.http.post("api/User-By-number",num);
//  }
}
