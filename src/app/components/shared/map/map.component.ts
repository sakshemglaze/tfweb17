import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent {
  @Input() longitude:Number = 0;
  @Input() latitude: Number=0;
  mapUrl1: string = '';
  showMap: boolean = true;
  constructor(private sanitizer:DomSanitizer){}

  openMapInIframe() {
    this.mapUrl()
    //this.mapUrl1 = `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=ADDRESS_OR_COORDINATES`;
    this.showMap = true;
  }

  mapUrl() {
    console.log(this.latitude);
    if (this.longitude || this.latitude) {
      return this.sanitizer.bypassSecurityTrustResourceUrl(
        //"https://www.google.com/maps/embed/v1/place?key=AIzaSyBoW5BAu13UnkjreNCSned2Ln1TOB5nJAM&"
        "https://maps.google.com/maps?q=" +
        this.longitude +
        ", " +
        this.latitude +
        "&z=15&output=embed"
      );
    }
    else {
      return this.sanitizer.bypassSecurityTrustResourceUrl(
        "https://maps.google.com/maps?q=" +
        "23.4241" +
        ", " +
        "53.8478" +
        "&z=15&output=embed"
      );
    }
  }
}
