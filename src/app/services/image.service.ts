import { Injectable } from '@angular/core';
import { TRADERSFIND } from '../constants/api-constants';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  getImageContent(image: any) {
    console.log(image);

   if (image && image.id && !image.imageContent ) {
     image['imageContent'] = TRADERSFIND.IMAGE_URL + image.id + '.webp';
   } else if ((image.imageContent != null) ||  (image.image != undefined)) 
   {
     console.log("URL");
     if (
       image.imageContentContentType &&
       image.imageContent &&
       !image.imageContent.includes('base64')
     ) {
       image['imageContent'] =
         image.imageContentContentType + ',' + image.imageContent;
     } else if (
       !image.imageContentContentType &&
       image.imageContent &&
       !image.imageContent.includes('base64')
     ) {
       image['imageContent'] = 'data:image/webp;base64,' + image.imageContent;
     }
   }
 }
}
