import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BlogListComponent } from './blog-list.component';
import { BlogComponent } from './blog/blog.component';


const routes: Routes = [
  { path: '', component: BlogListComponent },
  { path: ':title', component: BlogComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forChild(routes),
    
  ]
})
export class BlogListModule { }
