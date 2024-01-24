import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  public static USER_ACCESS_TOKEN: string = 'userAccessToken';
  public static LOGIN: string = 'login';
  public static USER_ID: string = 'userId';
  public static SELECTED_FILTERS: string = 'selectedFilters';
  public static SELECTED_LEAD_FILTERS: string = 'selectedLeadFilters';
  public static SEARCH_FILTERS: string = 'searchFilters';
  public static LOGGED_IN_USER_DETAILS: string = 'loggedInUserDetails';
  public static ASKED_FOR_PUSH_NOTIFICATIONS: string =
    'askedForPushNotifications';

  constructor(@Inject(PLATFORM_ID) private platformId: any) {}

  getItem(item: any) {
    let value;
    if (isPlatformBrowser(this.platformId)) {
      value = localStorage.getItem(item);
      try {
        if (value && typeof JSON.parse(value) == 'object') {
          return JSON.parse(value);
        } else {
          return value;
        }
      } catch (e) {
        return value;
      }
    } else {
      return null;
    }
  }

  setItem(key: any, value: any) {
    if (isPlatformBrowser(this.platformId)) {
      if (value && typeof value == 'object') {
        localStorage.setItem(key, JSON.stringify(value));
      } else {
        localStorage.setItem(key, value);
      }
    }
  }

  removeItem(item: any) {
    if (isPlatformBrowser(this.platformId)) localStorage.removeItem(item);
  }

  removeAll() {
    if (isPlatformBrowser(this.platformId)) {
      var askedForPushNotifications = this.getItem(
        StorageService.ASKED_FOR_PUSH_NOTIFICATIONS
      );
      localStorage.clear();
      this.setItem(
        StorageService.ASKED_FOR_PUSH_NOTIFICATIONS,
        askedForPushNotifications
      );
    }
  }
}
