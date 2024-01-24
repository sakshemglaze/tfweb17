import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRegistrationComponent } from './user-registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HeaderSubModule } from '../header-sub/header-sub.module';
import { SellYourProductsModule } from '../sell-your-products/sell-your-products.module';

const routes: Routes = [{ path: "", component: UserRegistrationComponent }];

@NgModule({
  declarations: [],
  imports: [CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UserRegistrationModule { }
