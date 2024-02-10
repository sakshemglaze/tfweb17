import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule,  isPlatformBrowser } from '@angular/common';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { Meta } from '@angular/platform-browser';
import { CanonicalService } from './services/canonical.service';
import { HomeSearchService } from './services/home-search.service';
import { StorageService } from './services/storage.service';
import { HttpClientModule } from '@angular/common/http';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
//import { provideAnimations } from '@angular/platform-browser/animations';
//import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,FooterComponent,HttpClientModule,ToastModule,RouterLink, RouterLinkActive ],
  providers:[MessageService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  
})

export class AppComponent {
    title = "UAE's largest Online B2B Portal - TradersFind";
  constructor(
    @Inject(PLATFORM_ID) private platformId: any,

    private metaTagService: Meta,
    private canonicalService: CanonicalService,
    private homeSearchService: HomeSearchService,
    //private dialog: MatDialog,
    private router: Router,
    private storageService: StorageService
  ) {

  }

  ngOnInit() {
    this.canonicalService.setCanonicalURL();
    this.metaTagService.addTags([
     // {
     //   name: "keywords",
     //   content:
     //     "Tradersfind UAE, online Tradersfind, business Tradersfind, UAE B2B Marketplace, B2B Portal, Tradersfind directory, UAE Tradersfind, UAE exporters directory, UAE manufacturers directory, UAE suppliers directory, Import Export UAE, Importers UAE, Buy Trade Leads, UAE business directory, online business listings, local business listings, UAE local Business directory, UAE Tradersfind, local businesses, online Business information, UAE business companies, b2b website, online directory",
     // },
      { name: "robots", content: "index, follow" },
      { name: "author", content: "Tradersfind" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { charset: "UTF-8" },
      { name: "language", content: "English" },
      { name: "revisit-after", content: "1 days" },
      {
        name: "title",
        content: "UAE Largest Online B2B Portal - TradersFind",
      },
      //{
       // name: "description",
       // content:
       //   "Tradersfind UAE is the leading B2B Portal & Business Directory In UAE. A Platform for Supplier & Buyer to fulfill their product & service requirement.",
      //},
      //{ name: "twitter:card", content: "summary" },
      //{ name: "twitter:site", content: "@etisalatyp" },
      {
        name: "twitter:title",
        content:
          "Tradersfind - B2B Portal, Business Directory In UAE",
      },
      {
        name: "twitter:description",
        content:
          "Tradersfind is the leading B2B Portal & Business Directory In UAE. A Platform for Supplier & Buyer to fulfill their product & service requirement.",
      },
      {
        name: "og_title",
        property: "og:title",
        content:
          "Tradersfind - B2B Portal, Business Directory In UAE",
      },
      {
        name: "og_description",
        property: "og:description",
        content:
          "Tradersfind is the leading B2B Portal & Business Directory In UAE. A Platform for Supplier & Buyer to fulfill their product & service requirement.",
      },
      { name: "og_url", property: "og:url", content: "https://www.tradersfind.com" },
      { name: "og_type", property: "og:type", content: "website" },
      {
        name: "og_site_name",
        property: "og:site_name",
        content: "tradersfind.com",
      },
      {
        name: "og_image",
        property: "og:image",
        content: "https://tradersfind.com/assets/images/YP-logo.png",
      },
    ]);
    
    // if(isPlatformBrowser(this.platformId)){
    //   var that = this;
    //   setTimeout(() => {
    //     that.loadScript('http://www.some-library.com/library.js');
    //     that.loadScript('https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js');
    //     that.loadScript('https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js')
    //     that.loadScript('https://kit.fontawesome.com/f1aa0aa0b0.js');
    //     that.loadLink('https://fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300itaÃ¢â‚¬Å’Ã¢â‚¬â€¹lic,400italic,500,500italic,700,700italic,900italic,900&display=swap', 'preload', 'font');
    //     that.loadLink('https://fonts.googleapis.com/icon?family=Material+Icons', 'stylesheet')
    //   }, 5000)
    // }else{
    //   this.loadScript('http://www.some-library.com/library.js');
    //   this.loadScript('https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js');
    //   this.loadScript('https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js')
    //   this.loadScript('https://kit.fontawesome.com/f1aa0aa0b0.js');
    //   this.loadLink('https://fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300itaÃ¢â‚¬Å’Ã¢â‚¬â€¹lic,400italic,500,500italic,700,700italic,900italic,900&display=swap', 'preload', 'font');
    //   this.loadLink('https://fonts.googleapis.com/icon?family=Material+Icons', 'stylesheet')
    // }
  }

  public loadScript(url: string) {
    const script = document.createElement("script");
    script.innerHTML = "";
    script.src = url;
    script.async = false;
    script.defer = true;
    document.head.appendChild(script);
  }

  loadLink(url: string, rel: string, as: any) {
    const link = document.createElement("link");
    link.innerHTML = "";
    link.href = url;
    link.rel = rel;
    if (as) link.as = as;
    document.head.appendChild(link);
  }

  onActivate(event: any) {
    if (isPlatformBrowser(this.platformId)){} 
  }

  @HostListener("click")
  clicked() {
    this.homeSearchService.searchResults = null;
  }
}
