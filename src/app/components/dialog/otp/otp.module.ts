import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderSubModule } from '../../header-sub/header-sub.module';
import { OtpComponent } from './otp.component';

const routes: Routes = [{ path: '', component: OtpComponent }];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forChild(routes),
  ],
  exports: []
})
export class OtpModule { }
