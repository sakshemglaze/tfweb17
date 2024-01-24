import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyerFaqComponent } from './buyer-faq.component';
import { Routes, RouterModule } from '@angular/router';
import { HeaderSubModule } from '../header-sub/header-sub.module';

const routes: Routes = [{ path: '', component: BuyerFaqComponent }];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forChild(routes),
  ]
})
export class BuyerFaqModule { }
