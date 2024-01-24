import { Component, OnInit } from '@angular/core';
import { ApiSharedService } from '../../../services/api-shared.service';
import { UrlService } from '../../../services/url.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-category',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './home-category.component.html',
  styleUrl: './home-category.component.css'
})
export class HomeCategoryComponent  implements OnInit {
  categoriesList: any[] = [];
  constructor(private _apiSharedService: ApiSharedService, private _urlService: UrlService) {}
  
  //constructor(private _urlService: UrlService) {}
  ngOnInit(): void {
    this.getAllCategories();
  }

  getAllCategories() {
    this._apiSharedService
      .getAllProductCategoriesIdName(0, 20)
      .subscribe((res) => {
        this.categoriesList = res;
      });
  }

  getCategory(catId: any, name: any) {
    return (
      this._urlService.getCategoryUrl(name, catId)
      //'/category/' + name.toLowerCase().replace(/[ ,]/g, '-') + '/' + catId
    );
  }
}
