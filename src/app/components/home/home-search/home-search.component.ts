import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { fromEvent, map, debounceTime, distinctUntilChanged } from 'rxjs';
import { ApiSharedService } from '../../../services/api-shared.service';
import { HomeSearchService } from '../../../services/home-search.service';
import { StorageService } from '../../../services/storage.service';
import { UrlService } from '../../../services/url.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-search',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './home-search.component.html',
  styleUrl: './home-search.component.css'
})
export class HomeSearchComponent implements OnInit, AfterViewInit {
  @Input() classPara: any;
  searchKeywordControl = new FormControl("");
  areas = [
    "UAE",
    "Dubai",
    "Sharjah",
    //"Al Ain",
    "Ras Al Khaimah",
    "Abu Dhabi",
    "Ajman",
    "Fujairah",
    "Umm Al Quwain",
  ];
  location = "UAE";
  autofillSubcat = [];
  searchFormFroup: FormGroup | any;
  @ViewChild("search", { static: true }) search: ElementRef | any;
  messageService: any;
  constructor(
    private _apiSharedService: ApiSharedService,
    private _router: Router,
    //private messageService: MessageService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    public homeSearchService: HomeSearchService,
    private storageService: StorageService,
    private urlService: UrlService
  ) { }

  ngOnInit(): void {
    this.searchFormFroup = this.formBuilder.group({
      location: [
        this.homeSearchService.location
          ? this.homeSearchService.location
          : "UAE",
      ],
    });

    fromEvent(this.search.nativeElement, "keyup")
      .pipe(
        // get value
        map((event: any) => {
          this.homeSearchService.searchText = event.target.value;
          return event.target.value;
        }),
        // if character length greater then 2
        // , filter(res => res.length > 2)

        // Time in milliseconds between key events
        debounceTime(100),

        // If previous query is diffent from current
        distinctUntilChanged()

        // subscription for response
      )
      .subscribe((text: string) => {
        this.autoCompleteSearch(text);
      });
  }

  ngAfterViewInit() {
    let srchTxt = this.route.snapshot.paramMap.get("searchText");
    if (this.homeSearchService.searchText) {
      this.search.nativeElement.value = this.homeSearchService.searchText;
    } else if (srchTxt && srchTxt != "") {
      //this.homeSearchService.searchText = srchTxt.replace(/ /g, "-");
      this.search.nativeElement.value = srchTxt //this.homeSearchService.searchText;
    }

    if (this.homeSearchService.location) {
      this.searchFormFroup.controls["location"].setValue(
        this.homeSearchService.location
      );
    }
  }

  autoCompleteSearch(searchText: any) {
    this.homeSearchService.fieldName = null;
    if (
      searchText &&
      searchText.trim() != "" &&
      searchText.trim().length > 1 &&
      searchText.length > 2
    ) {
      this._apiSharedService.getSearchData(searchText).subscribe((res) => {
        this.homeSearchService.fieldName = null;
        this.homeSearchService.searchResults = res.body;
        /*this.homeSearchService.searchResults["keywords"] =
          this.homeSearchService.searchResults["keywords"].map(
            (keyword: any) => (keyword = keyword.toLowerCase())
          ); */
        this.homeSearchService.searchResults["productNames"] =
          this.homeSearchService.searchResults["productNames"].map((prod: any) => ({
            id: prod.id,
            productName: prod.productName.toLowerCase(),
          }));
        this.homeSearchService.searchResults["sellerNames"] =
          this.homeSearchService.searchResults["sellerNames"].map(
            (seller: any) => (seller = seller.toLowerCase())
          );
        this.homeSearchService.searchResults["subCatNames"] =
          this.homeSearchService.searchResults["subCatNames"].map((subcat: any) => ({
            id: subcat.productSubCategory
              ? subcat.productSubCategory.id
              : subcat.id,
            categoryName: subcat.categoryName.toLowerCase(),
            subCategoryName: subcat.subCategoryName.toLowerCase(),
            status:true,
          }));
      });
    } else {
      this.homeSearchService.fieldName = null;
      this.homeSearchService.searchResults = null;
    }
  }

  onSelectSearchText(fieldName: any, fieldDetails: any) {
    this.homeSearchService.fieldName = fieldName;
    this.homeSearchService.searchResults = null;
    if (fieldName == "product") {
      this.search.nativeElement.value = fieldDetails.productName;
      this.homeSearchService.fieldDetails = fieldDetails;
      this.homeSearchService.searchText = fieldDetails.productName;
    } else if (fieldName == "subcategory") {
      this.search.nativeElement.value = fieldDetails.subCategoryName;
      this.homeSearchService.fieldDetails = fieldDetails;
      this.homeSearchService.searchText = fieldDetails.subCategoryName;
   //} else if (fieldName == "seller") {
   //   this.search.nativeElement.value = fieldDetails.sellerNames;
     // this.homeSearchService.fieldDetails = fieldDetails;
     // this.homeSearchService.searchText = fieldDetails.sellerNames;
   //   console.log(fieldDetails);
   //   this._router.navigate(["sellers", fieldDetails.trim().toLowerCase().replace(/[ ,]/g, "-")],{ queryParams: {} });
     //return;
    } else {
      if (fieldDetails) {
        this.search.nativeElement.value = fieldDetails.trim();
        this.homeSearchService.searchText = fieldDetails.trim();
      }
    }
    this.onClickSearch();
  }

  onClickSearch() {
    this.homeSearchService.searchResults = null;
    let searchText = this.search.nativeElement.value;
    this.homeSearchService.searchText = this.search.nativeElement.value;
    if (searchText && searchText.length > 2) {
      searchText = searchText.trim().toLowerCase().replace(/&|\,|\s/g, '-').replace(/-+/g, "-");
    } else if (searchText && searchText.length >= 0 && searchText.length <= 2) {
      this.messageService.add({
        severity: "error",
        summary: "Please enter at least 3 characters to search.",
      });
      return;
    } else {
      this.messageService.add({
        severity: "error",
        summary: "Please enter something to search.",
      });
      return;
    }
    let location = this.searchFormFroup.controls["location"].value;
    location = location.trim().toLowerCase().replace(/ /g, "-");
    //If user has selected any product, then irrespective of location route the user to the selected product page
     if(this.homeSearchService.fieldName == 'product'){
       this._router.navigate(['product',encodeURIComponent(this.homeSearchService.fieldDetails.productName.trim().toLowerCase().replace(/ /g,"-")),this.homeSearchService.fieldDetails.id]);
       return;
     }

    this.storageService.setItem(StorageService.SELECTED_FILTERS, null);
    if (location == "uae" || location == 'null') {
      if (this.homeSearchService.fieldName == "subcategory") {
        this._router.navigate(
          [
           this.urlService.getSubcategoryUrl(this.homeSearchService.fieldDetails.categoryName,
              this.homeSearchService.fieldDetails.subCategoryName,this.homeSearchService.fieldDetails.id)
          ],
          { queryParams: {} }
        );
      }else if (this.homeSearchService.fieldName == "seller") {
        //this._router.navigate([this.urlService.getSellerUrl(this.homeSearchService.fieldDetails.sellerNames)
        this._router.navigate(["seller",searchText ],
          { queryParams: {} }
        ); 
      }else {
        this._router.navigate(["search", searchText], {
          queryParams:
            this.homeSearchService.fieldName &&
              this.homeSearchService.fieldName != "keyword"
              ? { field: this.homeSearchService.fieldName }
              : {},
        });
      }
    } else {
      if (this.homeSearchService.fieldName == "subcategory") {
        this._router.navigate(
          [
            this.urlService.getSubcategoryLocUrl(this.homeSearchService.fieldDetails.categoryName,
              this.homeSearchService.fieldDetails.subCategoryName,
              this.homeSearchService.location, this.homeSearchService.fieldDetails.id)
          ],
          { queryParams: {} }
        );
      } else if (this.homeSearchService.fieldName == "seller") {
        //this._router.navigate([this.urlService.getSellerUrl(this.homeSearchService.fieldDetails.sellerNames)
        this._router.navigate(["seller",searchText ],
          { queryParams: {} }
        ); 
      }else {
        this._router.navigate(["search", searchText, location], {
          queryParams:
            this.homeSearchService.fieldName &&
              (this.homeSearchService.fieldName != "keyword" )
              ? { field: this.homeSearchService.fieldName }
              : {},
        });
      }
    }
  }

  searchInViewportAction(event: any) {
    if (!this.classPara) {
      this.homeSearchService.searchBarVisibleOnHomepage = event.visible;
      if (!event.visible) this.homeSearchService.searchResults = null;
    }
  }

  onChangeLocation(event: any) {
    this.homeSearchService.location = event;
  }
}
