import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderSubComponent } from '../header-sub/header-sub.component';
import { FooterComponent } from '../footer/footer.component';
@Component({
  selector: 'app-termandc',
  standalone: true,
  imports: [FooterComponent,CommonModule,HeaderSubComponent],
  templateUrl: './termandc.component.html',
  styleUrl: './termandc.component.css'
})
export class TermandcComponent {

}
