import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HomeSearchComponent } from '../home/home-search/home-search.component';
import { HeaderSubComponent } from '../header-sub/header-sub.component';

@Component({
  selector: 'app-notfound',
  standalone: true,
  imports: [CommonModule, HomeSearchComponent,HeaderSubComponent,],
  templateUrl: './notfound.component.html',
  styleUrl: './notfound.component.css'
})
export class NotfoundComponent {
  constructor(private router:Router){}
  ngOnInit(): void {
     const imageId = '64f1df02ffc0dc09cd9e3690' 
     //const imageUrl =
    }
   homeF() {
    this.router.navigateByUrl('/');
   }
}
