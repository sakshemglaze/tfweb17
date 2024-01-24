import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet,  } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterOutlet],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  userName:any="";
  number:any;
constructor( public storageService:StorageService,
  ) 
{}
  ngOnInit(): void {

    console.log("--------------------")
    this.userName= this.storageService.getItem('login') ? this.storageService.getItem('userFname'): "" ;
    console.log(this.userName);
    //throw new Error('Method not implemented.');
  }
  SignOut(){
    this.userName="";
    this.storageService.setItem('userAccessToken', '');
      this.storageService.setItem('isLoggedIn', '0');
      this.storageService.setItem('loggedVia', '');
      this.storageService.setItem('login', '');
      this.storageService.setItem('userData','');
      this.storageService.setItem('userMobile','');
      this.storageService.setItem('userFname', ''); 
  }
}
