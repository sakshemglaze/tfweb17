import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringManipulationService {

  constructor() { }

  toTitleCase(text: string) {
    let searchText = '' + text;
    return searchText.toLowerCase()
      .split(' ')
      .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
      .join(' ');
  }

  addPlusBeforeNumber(phone: string) {
    if (phone && phone.trim() != '' && !phone.startsWith('+')) {
      if (phone.startsWith('971'))
        return '+' + phone;
      else
        return '+971' + phone;
    }
    return phone;
  }
}
