import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HeaderSubModule } from '../header-sub/header-sub.module';
import { SendFeedbackComponent } from './send-feedback.component';

const routes: Routes = [{ path: '', component: SendFeedbackComponent }];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forChild(routes),
  ]
})
export class SendFeedbackModule { }
