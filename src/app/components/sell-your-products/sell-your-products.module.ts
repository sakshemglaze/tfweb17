import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellYourProductsComponent } from './sell-your-products.component';
import { HeaderSubModule } from '../header-sub/header-sub.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: '', component: SellYourProductsComponent }];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forChild(routes),
  ]
})
export class SellYourProductsModule { }
