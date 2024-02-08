import { Component, OnInit } from '@angular/core';
import { HeaderSubComponent } from '../header-sub/header-sub.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import { Router } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [FooterComponent,CommonModule, HeaderSubComponent, ],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.css'
})
export class PrivacyPolicyComponent implements OnInit{

  constructor( private _router: Router,
    private meta: Meta, private titleService: Title,){
    
  }
  ngOnInit(): void {
    this.titleService.setTitle("TradersFind's Privacy Policy - Largest Online B2B Portal");
    this.setTitle("TradersFind's Privacy Policy - Largest Online B2B Portal");
    this.updateMetaDescription("Navigate online trust with TradersFind's Privacy Policy. Explore UAE's Largest Online B2B Portal - TradersFind");
 
  }
  updateMetaDescription(description: string) {
    // Update the meta description
    this.meta.updateTag({ name: 'description', content: description });
  }
  setTitle(title:string){
    this.meta.updateTag({ name: 'title', content: title });
  }
}
