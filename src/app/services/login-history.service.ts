import { Injectable } from '@angular/core';
import { ApiSharedService } from './api-shared.service';

@Injectable({
  providedIn: 'root'
})
export class LoginHistoryService {

 
  constructor(private apiSharedV2Service: ApiSharedService) { }

  sendLoginHistory(ipAddress: any, deviceInfo: any, userId: any) {
    let payload = {
      browser: deviceInfo.browser,
      loginIp: ipAddress,
      loginTime: new Date(),
      operatingSystem: deviceInfo.os,
      deviceType: deviceInfo.deviceType,
      browserVersion: deviceInfo.browser_version,
      deviceOrientation: deviceInfo.orientation,
      osVersion: deviceInfo.os_version,
      user: { id: userId }
    }
    this.apiSharedV2Service.sendLoginHistory(payload).subscribe(res => { });
  }
}
