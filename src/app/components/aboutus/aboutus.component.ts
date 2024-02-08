import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { HeaderSubComponent } from '../header-sub/header-sub.component';
import { FooterComponent } from '../footer/footer.component';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-aboutus',
  standalone: true,
  imports: [HeaderSubComponent, FooterComponent],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.css'
})
export class AboutusComponent implements OnInit {
  constructor(private router: Router,private meta: Meta, private titleService: Title,) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0); // Scroll to the top on route change
      }
    });
  }
  ngOnInit(): void {
   this.titleService.setTitle("Your Ultimate B2B and B2C Platform - TradersFind ");
   this.setTitle("Your Ultimate B2B and B2C Platform - TradersFind ");
   this.updateMetaDescription("TradersFind, a leading B2B and B2C Platform connects businesses with affordable solutions in the UAE. Elevate your business with TradersFind today!")
  }
  updateMetaDescription( description:string){
    this.meta.updateTag({name:'description',content:description});
  }
 
  setTitle(title:string){
    this.meta.updateTag({
      name:'title',
      content:title
    })
}
}
