import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellerFaqComponent } from './seller-faq.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderSubModule } from '../header-sub/header-sub.module';

const routes: Routes = [{ path: '', component: SellerFaqComponent }];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forChild(routes),
  ]
})
export class SellerFaqModule { }
