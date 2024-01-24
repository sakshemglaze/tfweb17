import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HeaderSubModule } from '../header-sub/header-sub.module';
import { PrivacyPolicyComponent } from './privacy-policy.component';



const routes: Routes = [{ path: '', component: PrivacyPolicyComponent }];

@NgModule({
  declarations: [
    
  ],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class PrivacyPolicyModule { }
