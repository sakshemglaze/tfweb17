import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { OtpModule } from '../dialog/otp/otp.module';
import { UserLoginComponent } from './user-login.component';
import { LoadpModule } from '../shared/loadp/loadp.module';



const routes: Routes = [
  { path: "", component: UserLoginComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class UserLoginModule { }
