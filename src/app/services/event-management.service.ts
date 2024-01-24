import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventManagementService {

  private loginSource: BehaviorSubject<any> = new BehaviorSubject(false);
  constructor() { }

  loginEventListener(): Observable<any> {
    return this.loginSource.asObservable();
  }

  setLoginData(data: any) {
    this.loginSource.next(data);
  }
}
