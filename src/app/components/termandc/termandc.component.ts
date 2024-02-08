import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HeaderSubComponent } from '../header-sub/header-sub.component';
import { FooterComponent } from '../footer/footer.component';
import { Meta, Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-termandc',
  standalone: true,
  imports: [FooterComponent,CommonModule,HeaderSubComponent],
  templateUrl: './termandc.component.html',
  styleUrl: './termandc.component.css'
})
export class TermandcComponent implements OnInit {

  constructor(private meta: Meta, private titleService: Title, private router: Router) { }

  ngOnInit(): void {
    // Set initial meta title
    this.titleService.setTitle("TradersFind's Terms & Conditions - Largest Online B2B Portal");
    this.updateMetaDescription("TradersFind's Terms & Conditions - UAE's Largest Online B2B Portal connecting buyers with suppliers. Register Now!");

   this.setTitle("TradersFind's Terms & Conditions - Largest Online B2B Portal")
   
  }
  updateMetaDescription(description: string) {
    // Update the meta description
    this.meta.updateTag({ name: 'description', content: description });
    
  }
  setTitle(title:string){
    this.meta.updateTag({ name: 'title', content: title });
  }
 
}

