import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { HeaderSubComponent } from '../header-sub/header-sub.component';
import { FooterComponent } from '../footer/footer.component';
@Component({
  selector: 'app-advertise-with-us',
  standalone: true,
  imports: [HeaderSubComponent,FooterComponent],
  templateUrl: './advertise-with-us.component.html',
  styleUrl: './advertise-with-us.component.css'
})
export class AdvertiseWithUsComponent {
  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0); // Scroll to the top on route change
      }
    });
  }
}
