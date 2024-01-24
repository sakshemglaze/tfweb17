import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostBuyRequirementsComponent } from './post-buy-requirements.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { PrimengModule } from '../../modules/primeng/primeng.module';
import { OtpModule } from '../dialog/otp/otp.module';
import { HeaderSubModule } from '../header-sub/header-sub.module';
import { LoadpModule } from '../shared/loadp/loadp.module';

const routes: Routes = [{ path: '', component: PostBuyRequirementsComponent }];

@NgModule({
  declarations: [],
  imports: [
   CommonModule, RouterModule.forChild(routes),
  ],

})
export class PostBuyRequirementsModule { }
