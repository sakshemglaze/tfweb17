import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeSearchComponent } from '../home/home-search/home-search.component';
import { HeaderSubComponent } from '../header-sub/header-sub.component';
import { FooterComponent } from '../footer/footer.component';
import { Meta, Title } from '@angular/platform-browser';
@Component({
  selector: 'app-notfound',
  standalone: true,
  imports: [FooterComponent,CommonModule, HomeSearchComponent,HeaderSubComponent,],
  templateUrl: './notfound.component.html',
  styleUrl: './notfound.component.css'
})
export class NotfoundComponent implements OnInit{
  constructor(private router:Router,private meta:Meta,private titleService:Title){}
  ngOnInit(): void {
     const imageId = '64f1df02ffc0dc09cd9e3690' 
     //const imageUrl =
     this.titleService.setTitle("404 Error Page - Oops! This Page Can't Be Found")
     this.setTitle("404 Error Page - Oops! This Page Can't Be Found")
     this.setDescription("Experience a 404 error? Don't worry! Our team is on it. Explore our site or contact us for assistance. We'll get you back on track.");
    }
    setDescription(descrioptin:string){
this.meta.updateTag({
  name:"description",
  content:descrioptin
})
    }
setTitle(title:string){
  this.meta.updateTag({
    name:"title",
    content:title
  })
}

   homeF() {
    this.router.navigateByUrl('/');
   }
}
