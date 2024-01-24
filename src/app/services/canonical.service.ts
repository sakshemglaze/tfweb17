import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class CanonicalService {

  constructor(@Inject(DOCUMENT) private dom: any, private _sanitizer: DomSanitizer) { }

  setCanonicalURL() {
    
    let url = this.dom.URL.split(':');
    url[0] = 'https';
    const canURL = url.join(':');
    
    let links = this.dom.getElementsByTagName("link")
    links[4].setAttribute('href', canURL);
   
  }
}
