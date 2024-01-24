import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { HeaderSubComponent } from '../header-sub/header-sub.component';

@Component({
  selector: 'app-aboutus',
  standalone: true,
  imports: [HeaderSubComponent],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.css'
})
export class AboutusComponent {
  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
       // window.scrollTo(0, 0); // Scroll to the top on route change
      }
    });
  }
}
