import { Component } from '@angular/core';
import { HeaderSubComponent } from '../header-sub/header-sub.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sell-your-products',
  standalone: true,
  imports: [HeaderSubComponent,CommonModule],
  templateUrl: './sell-your-products.component.html',
  styleUrl: './sell-your-products.component.css'
})
export class SellYourProductsComponent {

}
