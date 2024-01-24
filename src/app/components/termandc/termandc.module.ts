import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TermandcComponent } from './termandc.component';
import { Routes, RouterModule } from '@angular/router';
import { HeaderSubModule } from '../header-sub/header-sub.module';

const routes: Routes = [{ path: '', component: TermandcComponent }]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class TermandcModule { }
