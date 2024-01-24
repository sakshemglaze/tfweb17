import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-industry',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './home-industry.component.html',
  styleUrl: './home-industry.component.css'
})
export class HomeIndustryComponent implements OnInit {
 
  industry: [string, string,string][] = [];
 constructor() {
   this.industry.push (["House Keeping Services","6450d5651381f473d7f9da4d","assets/images/industry/House-Keeping-Services.jpg"]);
   this.industry.push(["Travel, Tourism & Hotels","6450d5651381f473d7f9da64","assets/images/industry/Travel,-Tourism-&-Hotels.jpg"]);
   this.industry.push(["Architecture & Interiors","6450d5651381f473d7f9da30","assets/images/industry/Architecture-&-Interiors.jpg"]);
   this.industry.push(["Building & Construction","6450d5651381f473d7f9da65","assets/images/industry/Building-&-Constructio.jpg"]);
   this.industry.push(["Chemicals, Dyes & Solvents","6450d5651381f473d7f9da37","assets/images/industry/Chemicals,-Dyes-&-Solvents.jpg"]);
   this.industry.push(["Industrial Supplies","6450d5651381f473d7f9da51","assets/images/industry/Industrial_Supplies.jpg"])
 }
  ngOnInit(): void {
      
  }
 getIndustryUrl(indName: string, id: string) :string{
    return '/industry/' + indName.toLowerCase().replace(/&|\,|\s/g, '-').replace(/-+/g,"-") + '/' + id;
  }
}
