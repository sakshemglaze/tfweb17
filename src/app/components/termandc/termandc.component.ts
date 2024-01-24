import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderSubComponent } from '../header-sub/header-sub.component';

@Component({
  selector: 'app-termandc',
  standalone: true,
  imports: [CommonModule,HeaderSubComponent],
  templateUrl: './termandc.component.html',
  styleUrl: './termandc.component.css'
})
export class TermandcComponent {

}
