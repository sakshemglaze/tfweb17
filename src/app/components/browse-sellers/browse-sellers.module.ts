import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BrowseSellersComponent } from './browse-sellers.component';
import { HeaderSubModule } from '../header-sub/header-sub.module';
import { TradersImgModule } from '../shared/traders-img/traders-img.module';
const routes: Routes = [{ path: '', component: BrowseSellersComponent }];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forChild(routes), //NgxPaginationModule
  ]
})
export class BrowseSellersModule { }
