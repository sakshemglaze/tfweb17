import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndustoryComponent } from './industory.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { OtpModule } from '../dialog/otp/otp.module';
import { HeaderSubModule } from '../header-sub/header-sub.module';
import { IndustoryDetailComponent } from './industory-detail/industory-detail.component';
import { LoadpModule } from '../shared/loadp/loadp.module';
import { BannerAdvModule } from '../shared/banner-adv/banner-adv.module';
import { TradersImgModule } from '../shared/traders-img/traders-img.module';
import { provideClientHydration } from '@angular/platform-browser';

const routes: Routes = [
  { path: '', component: IndustoryComponent },
  { path: ':industryname/:industryid', component: IndustoryDetailComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forChild(routes),
  ],
  providers:[]
})
export class IndustoryModule { }
