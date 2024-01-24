import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderSubModule } from '../header-sub/header-sub.module';
import { AdvertiseWithUsComponent } from './advertise-with-us.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: AdvertiseWithUsComponent }];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class AdvertiseWithUsModule { }
