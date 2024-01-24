import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellerWebsiteComponent } from './seller-website.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { OtpModule } from '../dialog/otp/otp.module';
import { HeaderSubModule } from '../header-sub/header-sub.module';
import { LoadpModule } from '../shared/loadp/loadp.module';
import { LogoModule } from '../shared/logo/logo.module';
import { MapModule } from '../shared/map/map.module';
import { RatingsModule } from '../shared/ratings/ratings.module';
import { TradersImgModule } from '../shared/traders-img/traders-img.module';

const routes: Routes = [
  { path: ':sellerCompanyName', component: SellerWebsiteComponent },
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class SellerWebsiteModule { }
