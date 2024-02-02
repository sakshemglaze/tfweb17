import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderSubComponent } from '../header-sub/header-sub.component';
import { HomeSearchComponent } from '../home/home-search/home-search.component';
import { FooterComponent } from '../footer/footer.component';
@Component({
  selector: 'app-contactus',
  standalone: true,
  imports: [FooterComponent,CommonModule,HeaderSubComponent, HomeSearchComponent,],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.css'
})
export class ContactusComponent {

}
