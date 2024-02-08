import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { HeaderSubComponent } from '../header-sub/header-sub.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import { Meta, Title } from '@angular/platform-browser';
@Component({
  selector: 'app-buyer-faq',
  standalone: true,
  imports: [FooterComponent, CommonModule,HeaderSubComponent],
  templateUrl: './buyer-faq.component.html',
  styleUrl: './buyer-faq.component.css'
})
export class BuyerFaqComponent implements OnInit{
  constructor(private router: Router,
    private meta:Meta,
    private titelService:Title) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
       // window.scrollTo(0, 0); // Scroll to the top on route change
      }
    });
  }
  ngOnInit(): void {
    this.titelService.setTitle("Buyer FAQs | Frequently Asked Questions | TradersFind");
    this.setTitle("Buyer FAQs | Frequently Asked Questions | TradersFind")
    this.setDescription("Buyer FAQs - Frequently Asked Questions by buyers related to buying queries. Below are the questions frequently asked by our buyers.")
  }
  setDescription(descriprion:string){
this.meta.updateTag({
  name:'description',
  content:descriprion
})
  }
  setTitle(title:string){
    this.meta.updateTag({
      name:'title',
      content:title
    })
  }
}
