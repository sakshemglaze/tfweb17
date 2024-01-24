import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HeaderSubModule } from '../header-sub/header-sub.module';
import { HomeSearchModule } from '../home/home-search/home-search.module';
import { NotfoundComponent } from './notfound.component';

const routes: Routes = [{ path: '', component: NotfoundComponent }];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class NotfoundModule { }
