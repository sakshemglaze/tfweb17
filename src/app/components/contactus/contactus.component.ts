import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HeaderSubComponent } from '../header-sub/header-sub.component';
import { HomeSearchComponent } from '../home/home-search/home-search.component';
import { FooterComponent } from '../footer/footer.component';
import { Router } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
@Component({
  selector: 'app-contactus',
  standalone: true,
  imports: [FooterComponent,CommonModule,HeaderSubComponent, HomeSearchComponent,],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.css'
})
export class ContactusComponent implements OnInit {

  constructor( private _router: Router,
    private meta: Meta, private titleService: Title,){

  }

  ngOnInit(): void {
    this.titleService.setTitle("Reach TradersFind - UAE's Largest Online B2B Portal");
    this.setTitle("Reach TradersFind - UAE's Largest Online B2B Portal");
    this.updateMetaDescription("Have queries or suggestions? Contact us at TradersFind, UAE's Largest Online B2B Portal. Your gateway to seamless business interactions and solutions");
  }
  updateMetaDescription(description: string) {
    // Update the meta description
    this.meta.updateTag({ name: 'description', content: description });
  }
  setTitle(title:string){
    this.meta.updateTag({ name: 'title', content: title });
  }

}
