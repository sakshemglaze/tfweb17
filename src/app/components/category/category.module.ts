import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderSubModule } from '../header-sub/header-sub.module';
import { OtpModule } from '../dialog/otp/otp.module';
import { BannerAdvModule } from '../shared/banner-adv/banner-adv.module';
import { LoadpModule } from '../shared/loadp/loadp.module';
import { TradersImgModule } from '../shared/traders-img/traders-img.module';


const routes: Routes = [
  { path: '', component: CategoryComponent },
  { path: ':categoryname/:categoryid', component: CategoryComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forChild(routes),
  ]
})
export class CategoryModule { }
