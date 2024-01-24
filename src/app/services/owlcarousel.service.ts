import { Injectable } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Injectable({
  providedIn: 'root'
})
export class OwlcarouselService {
  constructor() { }
  customOptionsSm: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 1000,
    autoWidth: true,
    autoplay: false,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    items: 1,
    navText: ['<img src="/assets/v2/fa-icons/angle-left-solid.svg" alt="angle-left-icons" class="width-search-fa">', '<img src="/assets/v2/fa-icons/angle-right-solid.svg" alt="angle-right-icons" class="width-search-fa">'],
    nav: false,
  }
  customOptionsProduct: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 1000,
    autoWidth: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    items: 5,
    navText: ['<img src="/assets/v2/fa-icons/angle-left-solid.svg" alt="angle-left-icons" class="width-search-fa">', '<img src="/assets/v2/fa-icons/angle-right-solid.svg" alt="angle-right-icons" class="width-search-fa">'],
    nav: true,
    margin: 10,
  }

  customOptionsProductSm: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 1000,
    autoWidth: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    items: 2,
    navText: ['<img src="/assets/v2/fa-icons/angle-left-solid.svg" alt="angle-left-icons" class="width-search-fa">', '<img src="/assets/v2/fa-icons/angle-right-solid.svg" alt="angle-right-icons" class="width-search-fa">'],
    nav: false,

  }

  customOptionsSimilarProduct: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 1000,
    autoWidth: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    items: 3,
    navText: ['<img src="/assets/v2/fa-icons/angle-left-solid.svg" alt="angle-left-icons" class="width-search-fa mg-lft-arw">', '<img src="/assets/v2/fa-icons/angle-right-solid.svg" alt="angle-right-icons" class="width-search-fa">'],
    nav: true,
  }

  customOptionsSimilarProductSm: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 1000,
    autoWidth: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    items: 1,
    navText: ['<img src="/assets/v2/fa-icons/angle-left-solid.svg" alt="angle-left-icons" class="width-search-fa mg-lft-arw">', '<img src="/assets/v2/fa-icons/angle-right-solid.svg" alt="angle-right-icons" class="width-search-fa">'],
    nav: true,
  }
}
