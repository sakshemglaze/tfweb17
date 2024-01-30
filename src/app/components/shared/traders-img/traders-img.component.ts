import { CommonModule, NgOptimizedImage, isPlatformBrowser } from '@angular/common';
import { Component, Inject, Input, PLATFORM_ID } from '@angular/core';
import { DeviceType } from 'ngx-device-detector';
import { ApiSharedService } from '../../../services/api-shared.service';
import { TRADERSFIND } from '../../../constants/api-constants';

@Component({
  selector: 'app-traders-img',
  standalone: true,
  imports: [CommonModule,NgOptimizedImage],
  templateUrl: './traders-img.component.html',
  styleUrl: './traders-img.component.css'
})
export class TradersImgComponent {
  @Input() id: any;
  @Input() height: any;
  @Input() width: any;
  @Input() shimmer: any;
  @Input() imgHt: any;
  @Input() prodName: any;
  @Input() class: any;
  @Input() imageContent: any;

  constructor(
    private _apiSharedService: ApiSharedService,
    @Inject(PLATFORM_ID) private platformId: any
  ) { }

  ngOnInit() {
    //console.log(this.imageContent);
    if (this.id) {
      if(this.imageContent === null ) {
       // console.log("without API")
        //console.log(this.id);
        this.imageContent = TRADERSFIND.IMAGE_URL + this.id + ".webp";
        //console.log(this.imageContent);
      } else {
        console.log("API " + this.id); 
      this._apiSharedService.getImageContent(this.id).subscribe(
        (res) => {
          if (res.imageContent && res.imageContentContentType) {
            this.imageContent = "data:image/webp;base64" + "," + res.imageContent;
          } else if (res.imageContent && !res.imageContentContentType) {
            this.imageContent = "data:image/webp;base64" + "," + res.imageContent;
          } else {
            this.imageContent = TRADERSFIND.IMAGE_URL + this.id + ".webp";
          }
        },
        (error) => {
          this.imageContent = "assets/images/tflogo.webp";
        }
      );
     //console.log(this.imageContent);
      } 
      } else {
      this.imageContent = "assets/images/tflogo.webp";
    }
    //console.log(this.imageContent);
  }

  imageInViewportAction(event: any) {
    if (
      event.visible &&
      !this.imageContent &&
      isPlatformBrowser(this.platformId)
    ) {

    }
  }

  fullwidth() {
    return { 'width': this.width + '%' }
  }

  normalwidth() {
    if(DeviceType.Desktop) {
    return { 'width': '140px' }
    } else if (DeviceType.Mobile) {
      return { 'width': '140px'}
    } else
      return { 'width': '140px'}
  }
}
