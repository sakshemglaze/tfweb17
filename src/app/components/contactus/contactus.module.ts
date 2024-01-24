import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactusComponent } from './contactus.component';
import { Routes, RouterModule } from '@angular/router';
import { HeaderSubModule } from '../header-sub/header-sub.module';
import { HomeSearchModule } from '../home/home-search/home-search.module';

const routes: Routes = [{
  path: '', component: ContactusComponent
}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class ContactusModule { }
