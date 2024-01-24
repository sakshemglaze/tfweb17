import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { OtpModule } from '../dialog/otp/otp.module';
import { HeaderSubModule } from '../header-sub/header-sub.module';
import { MoreProductsComponent } from './more-products/more-products.component';
import { ProductDetailsComponent } from './product-details.component';
import { BannerAdvModule } from '../shared/banner-adv/banner-adv.module';
import { LoadpModule } from '../shared/loadp/loadp.module';
import { RatingsModule } from '../shared/ratings/ratings.module';
import { TradersImgModule } from '../shared/traders-img/traders-img.module';
const routes: Routes = [
  { path: ':prodName/:prodId', component: ProductDetailsComponent },
];


@NgModule({
  declarations: [],
  imports: [CommonModule,RouterModule.forChild(routes)],
})
export class ProductDetailsModule { }
