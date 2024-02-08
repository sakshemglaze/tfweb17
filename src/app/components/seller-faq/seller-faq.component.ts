import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HeaderSubComponent } from '../header-sub/header-sub.component';
import { FooterComponent } from '../footer/footer.component';
import { Meta, Title } from '@angular/platform-browser';
import { Route } from '@angular/router';
@Component({
  selector: 'app-seller-faq',
  standalone: true,
  imports: [CommonModule,HeaderSubComponent,FooterComponent],
  templateUrl: './seller-faq.component.html',
  styleUrl: './seller-faq.component.css'
})
export class SellerFaqComponent implements OnInit{

  constructor(private meta:Meta,private titelService:Title,){

  }
  ngOnInit(): void {
   this.titelService.setTitle("TradersFind Seller FAQ: Registration & Paid Memberships");
   this.setTitle("TradersFind Seller FAQ: Registration & Paid Memberships");
   this.UpdateDescription("Get answers to your questions about registration, paid membership, and more on TradersFind's seller FAQ page. Start boosting your selling potential!");

  }
UpdateDescription(description:string){
this.meta.updateTag({name:'description',content:description})
}
setTitle(title:string){
  this.meta.updateTag({name:'title',content:title})
}
}
