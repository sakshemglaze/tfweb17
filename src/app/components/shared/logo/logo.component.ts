import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.css'
})
export class LogoComponent {
  @Input() name: any;
  firstLetter: any;

  ngOnInit() {
    this.firstLetter = this.extractFirstLetters(this.name) //this.name.charAt(0).toUpperCase();
  }

  extractFirstLetters(inputString: string):  string{
    const words: string[] = inputString.split(' '); // Split the input string into words
    const firstLetters: string[] = words.map(word => word.charAt(0)); // Extract the first letter of each word
    return firstLetters.join(''); // Join the first letters back together
  }
}
