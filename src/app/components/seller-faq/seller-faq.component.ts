import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderSubComponent } from '../header-sub/header-sub.component';

@Component({
  selector: 'app-seller-faq',
  standalone: true,
  imports: [CommonModule,HeaderSubComponent],
  templateUrl: './seller-faq.component.html',
  styleUrl: './seller-faq.component.css'
})
export class SellerFaqComponent {

}
