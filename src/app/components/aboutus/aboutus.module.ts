import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus.component';
import { HeaderSubModule } from '../header-sub/header-sub.module';

const routes: Routes = [
  { path: '', component: AboutusComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class AboutusModule { }
