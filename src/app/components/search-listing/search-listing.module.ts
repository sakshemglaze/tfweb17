import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { provideClientHydration } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OtpModule } from '../dialog/otp/otp.module';
import { HeaderSubModule } from '../header-sub/header-sub.module';
import { PostRequestComponent } from '../shared/post-request/post-request.component';
import { SearchListingComponent } from './search-listing.component';
import { BannerAdvModule } from '../shared/banner-adv/banner-adv.module';
import { TradersImgModule } from '../shared/traders-img/traders-img.module';
import { ProductCardModule } from './product-card/product-card.module';
import { AmIVisibleDirective } from '../../am-ivisible.directive';
import { PremiumProductCardModule } from './premium-product-card/premium-product-card.module';
import { MessageService } from 'primeng/api';

const routes: Routes = [
  { path: ':scatName', component: SearchListingComponent },
  { path: ':scatName/:subCategoryId', component: SearchListingComponent },  
  { path: ':scatName/:location/:subCategoryId', component: SearchListingComponent },
];

@NgModule(
  {
  providers: [MessageService],
  declarations: [ ],
  imports: [CommonModule,RouterModule.forChild(routes)],
})
export class SearchListingModule { }
