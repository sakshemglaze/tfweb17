import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RatingsModule } from '../../shared/ratings/ratings.module';
import { TradersImgModule } from '../../shared/traders-img/traders-img.module';
import { provideClientHydration } from '@angular/platform-browser';
import { MessageService } from 'primeng/api';



@NgModule({
  declarations: [],
  imports: [CommonModule
   
  ],
  providers:[]

})
export class ProductCardModule { }
