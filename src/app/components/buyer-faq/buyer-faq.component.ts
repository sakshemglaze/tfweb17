import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { HeaderSubComponent } from '../header-sub/header-sub.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
@Component({
  selector: 'app-buyer-faq',
  standalone: true,
  imports: [FooterComponent, CommonModule,HeaderSubComponent],
  templateUrl: './buyer-faq.component.html',
  styleUrl: './buyer-faq.component.css'
})
export class BuyerFaqComponent {
  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
       // window.scrollTo(0, 0); // Scroll to the top on route change
      }
    });
  }
}
