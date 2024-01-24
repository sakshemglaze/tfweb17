import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { ApiSharedService } from './api-shared.service';
//import { Router } from 'express';
import { LoginHistoryService } from './login-history.service';

import { EventManagementService } from './event-management.service';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  login: any;
  userEmail: any;
  userFname: any;
  userLname: any;
  userType: any;
  sellLog: any;
  userId: any;
  ipAddress: any;
  loggedInUserDetails: any;
  constructor(
    private apiService: ApiService,
    private _apiSharedService: ApiSharedService,
 
    private loginHistory: LoginHistoryService,
    //private deviceDetectorService: DeviceDetectorService,
    private eventService: EventManagementService,
    private storageService: StorageService
  ) { }

  authenticateUser(force?: any) { // Call to this function will eventually be moved to all the login components, rather that header-v2
    this.login = this.storageService.getItem('login');
    let userLogin = this._apiSharedService.getUserByLogin(force)
    if (!this.login) return;
    userLogin.subscribe(res => {
      this.loggedInUserDetails = res;
      this.storageService.setItem(StorageService.LOGGED_IN_USER_DETAILS, res);
      this.apiService.getIPAddress().subscribe(res => {
        this.ipAddress = res.ip;
        //this.loginHistory.sendLoginHistory(this.ipAddress, this.deviceDetectorService.getDeviceInfo(), this.loggedInUserDetails.id);
        this.login
      })
      this.userId = res.id;
      this.userEmail = res.email;
      this.userFname = res.firstName;
      this.userLname = res.lastName;
      this.userType = res.userType;
      this.storageService.setItem('userId', res.id)
      if (this.userType == 'Seller') {
        this.sellLog = res.sellerCompanyName && res.sellerCompanyName != '' ? res.sellerCompanyName.toLowerCase().replace(/ /g, "-") : null;
      }
      this.eventService.setLoginData(true);
    },
      error => {
        this.userEmail = null;
        this.userFname = null;
        this.userLname = null;
        this.userType = null;

      });
  }

  logout() {
    this.clearCache();
  }

  clearCache() {
    this.userEmail = null;
    this.userFname = null;
    this.userLname = null;
    this.userType = null;
    this.storageService.removeAll();
   // this.router.navigate(['']);
  }

  getLoggedInUserInfo() {
    return this.storageService.getItem(StorageService.LOGGED_IN_USER_DETAILS);
  }
}
