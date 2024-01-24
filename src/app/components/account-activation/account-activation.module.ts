import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountActivationComponent } from './account-activation.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderSubModule } from '../header-sub/header-sub.module';

const routes: Routes = [
  { path:'', component:AccountActivationComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes),
    
  ]
})
export class AccountActivationModule { }
