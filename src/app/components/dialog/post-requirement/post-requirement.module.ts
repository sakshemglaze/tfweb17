import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostRequestComponent } from '../../shared/post-request/post-request.component';
import { PostRequirementComponent } from './post-requirement.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OtpModule } from '../otp/otp.module';
import { LoadpModule } from '../../shared/loadp/loadp.module';
import { MessageService } from 'primeng/api';

const routes: Routes = [{ path: '', component: PostRequirementComponent }];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forChild(routes),
  ],
  exports: [],
  providers:[MessageService]
})
export class PostRequirementModule { }
