import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

 
  constructor(private _apiservice:ApiService) { }
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      // 'Access-Control-Allow-Origin': '*',
      // 'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
      // 'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With'
    }),
  };

  savefeedback(data:any):Observable<any>{
    console.log("service",data)
    return  this._apiservice.post('api/saveFeedback',data,true,
    null,
    true);
  }
}
